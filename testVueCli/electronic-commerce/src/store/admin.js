import axios from 'axios';
import router from '../router';
import $ from 'jquery';
import vue from 'vue';

export default({
  state: {
    url: {
      account(name) {
        switch (name) {
          case 'signin':
            return `${process.env.VUE_APP_APIPATH}/admin/signin`;
          case 'signout':
            return `${process.env.VUE_APP_APIPATH}/logout`;
          default:
            return `${process.env.VUE_APP_APIPATH}/admin/signin`;
        }
      },
      products(name, item) {
        switch (name) {
          case 'page':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${item}`;
          case 'post':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
          case 'put':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${item}`;
          case 'delete':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${item}`;
          case 'img':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
        }
      }
    },
    products: [],
    pagination: {},
    tempProducts: {},
    isNew: false,
    fileUploading: false,
  },
  mutations: {
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    PAGINATION(state, payload) {
      state.pagination = payload;
    },
    ISNEW(state, payload) {
      state.isNew = payload;
    },
    TEMPPRODUCTS(state, payload) {
      state.tempProducts = payload;
    }
  },
  actions: {
    signin({ state, dispatch }, user) {
      const api = state.url.account('signin');
      axios.post(api, user).then((response) => {
        if (response.data.success) {
          const token = response.data.token;
          const expired = response.data.expired;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
          router.push('/admin/products');
        } else {
          dispatch('updateMessage', { 
            message: response.data.message, 
            status: 'danger', 
          })
        }
      })
    },
    signout({ state }) {
      const url = state.url.account('signout');
      axios.post(url).then((response) => {
        if (response.data.success) {
          router.push('/login');
        }
      });
    },
    getProducts({ commit, state }, page) {
      const api = state.url.products('page', page);
      commit('LOADING', true);
      axios.get(api).then((response) => {
        commit('LOADING', false);
        commit('PRODUCTS', response.data.products);
        commit('PAGINATION', response.data.pagination);
      });
    },
    openModal({ commit }, { isNew, item }) {
      if (isNew) {
        commit('TEMPPRODUCTS', {});
        commit('ISNEW', true);
      } else {
        commit('TEMPPRODUCTS', Object.assign({}, item));
        commit('ISNEW', false);
      }
      $('#productsModal').modal('show');
    },
    openDelModal({ commit }, item) {
      commit('TEMPPRODUCTS', item);
      $('#deleteModal').modal('show');
    },
    updateProduct({ state, dispatch }) {
      let api = state.url.products('post');
      let httpMethod = 'post';
      if (!state.isNew) {
        api = state.url.products('put', state.tempProducts.id);
        httpMethod = 'put';
      }
      axios[httpMethod](api, {data: state.tempProducts}).then((response) => {
        if (response.data.success) {
          $('#productsModal').modal('hide');
          dispatch('getProducts');
          dispatch('updateMessage', {
            message: response.data.message,
            status: 'success',
          });
        } else {
          $('#productsModal').modal('hide');
          dispatch('getProducts');
          dispatch('updateMessage', {
            message: response.data.message,
            status: 'danger',
          });
        }
        // vm.products = response.data.products;
      });
    },
    deleteProducts({ state, dispatch }) {
      const api = state.url.products('delete', state.tempProducts.id);
      axios.delete(api).then((response) => {
        if (response.data.success){
          $('#deleteModal').modal('hide');
          dispatch('getProducts');
          dispatch('updateMessage', {
            message: response.data.message,
            status: 'success',
          });
        } else {
          $('#deleteModal').modal('hide');
          dispatch('getProducts');
          dispatch('updateMessage', {
            message: response.data.message,
            status: 'danger',
          });
        }
      });
    },
    uploadFile({ state, dispatch }, uploadedFile) {
      const formData = new FormData();
      const url = state.url.products('img');
      formData.append("file-to-upload", uploadedFile);
      state.fileUploading = true;
      axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        state.fileUploading = false;
        if (response.data.success) {
          vue.set(state.tempProducts, 'imageUrl', response.data.imageUrl);
        } else {
          dispatch('updateMessage', {
            message: response.data.message,
            status: 'danger',
          });
        }
      });
    },
  },
  getters: {
    products: state => state.products,
    pagination: state => state.pagination,
    tempProducts: state => state.tempProducts,
    isNew: state => state.isNew,
    fileUploading: state => state.fileUploading,
  },
});