import axios from 'axios';
import router from '../router';
import $ from 'jquery';
import vue from 'vue';

export default({
  namespaced: true,
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
          default:
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}//products/all`;
        }
      },
      orders(name, item) {
        switch (name) {
          case 'page':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${item}`;
          case 'put':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/order/${item}`;
          default:
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/order`;
        }
      },
      coupons(name, item) {
        switch (name) {
          case 'page':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${item}`;
          case 'post':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
          case 'put':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${item}`;
          case 'delete':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${item}`;
          default:
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
        }
      }
    },
    user: {
      username:'',
      password:'',
      saved: true,
    },
    users:[],
    products: [],
    pagination: {},
    tempProducts: {},
    isNew: false,
    fileUploading: false,
    orders: [],
    coupons: [],
    tempCoupons: {},
  },
  mutations: {
    USERNAME(state, payload) {
      state.user.username = payload;
    },
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
    },
    ORDERS(state, payload) {
      state.orders = payload;
    },
    COUPONS(state, payload) {
      state.coupons = payload;
    },
    TEMPCOUPONS(state, payload) {
      state.tempCoupons = payload;
    },
  },
  actions: {
    signin({ state, dispatch }) {
      if(state.user.saved) {
        localStorage.setItem('saveAccount', JSON.stringify(state.user.username));
      } else {
        localStorage.removeItem('saveAccount');
      }
      const api = state.url.account('signin');
      axios.post(api, state.user).then((response) => {
        if (response.data.success) {
          const token = response.data.token;
          const expired = response.data.expired;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
          router.push('/admin/products');
        } else {
          dispatch('updateMessage', { 
            message: response.data.message, 
            status: 'danger', 
          }, { root: true })
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
      commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        commit('LOADING', false, { root: true });
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
          }, { root: true });
        } else {
          $('#productsModal').modal('hide');
          dispatch('getProducts');
          dispatch('updateMessage', {
            message: response.data.message,
            status: 'danger',
          }, { root: true });
        }
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
          }, { root: true });
        } else {
          $('#deleteModal').modal('hide');
          dispatch('getProducts');
          dispatch('updateMessage', {
            message: response.data.message,
            status: 'danger',
          }, { root: true });
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
          }, { root: true });
        }
      });
    },
    getOrders({ state, commit }, page) {
      const url = state.url.orders('page', page);
      commit('LOADING', true, { root: true });
      axios.get(url).then((response) => {
        commit('ORDERS', response.data.orders);
        commit('PAGINATION', response.data.pagination);
        commit('LOADING', false, { root: true });
      });
    },
    updateOrder({ state, dispatch }, {tempOrder, id}) {
      const url = state.url.orders('put', id);
      axios.put(url, {data: tempOrder}).then((response) => {
        if (response.data.success) {
          $('#orderModal').modal('hide');
          dispatch('getOrders');
          dispatch('updateMessage', {
            message: response.data.message,
            status: 'success',
          }, { root: true });
        } else {
          $('#orderModal').modal('hide');
          dispatch('getOrders');
          dispatch('updateMessage', {
            message: response.data.message,
            status: 'danger',
          }, { root: true });
        }
      });
    },
    getCoupons({ state, commit }, page) {
      const url = state.url.coupons('page', page);
      commit('LOADING', true, { root: true });
      axios.get(url).then((response) => {
        commit('COUPONS', response.data.coupons);
        commit('PAGINATION', response.data.pagination);
        commit('LOADING', false, { root: true });
      })
    },
    openCouponModal({ commit }, { isNew, item }) {
      if (isNew) {
        commit('TEMPCOUPONS', {});
        commit('ISNEW', true);
      } else {
        commit('TEMPCOUPONS', Object.assign({}, item));
        commit('ISNEW', false);
      }
      $('#couponsModal').modal('show');
    },
    openDelCouponModal({ commit }, item) {
      commit('TEMPCOUPONS', item);
      $('#deleteModal').modal('show');
    },
    updateCoupon({ state, dispatch }) {
      let url = state.url.coupons('post');
      let httpMethod = 'post';
      if (!state.isNew) {
        url = state.url.coupons('put', state.tempCoupons.id);
        httpMethod = 'put';
      }
      axios[httpMethod](url, {data: state.tempCoupons}).then((response) => {
        if (response.data.success) {
          $('#couponsModal').modal('hide');
          dispatch('getCoupons');
          dispatch('updateMessage', {
            message: response.data.message,
            status: 'success',
          }, { root: true });
        } else {
          $('#couponsModal').modal('hide');
          dispatch('getCoupons');
          dispatch('updateMessage', {
            message: response.data.message,
            status: 'danger',
          }, { root: true });
        }
      });
    },
    deleteCoupon({ state, dispatch}) {
      const url = state.url.coupons('delete', state.tempCoupons.id);
      axios.delete(url).then((response) => {
        if (response.data.success){
          $('#deleteModal').modal('hide');
          dispatch('getCoupons');
          dispatch('updateMessage', {
            message: response.data.message,
            status: 'success',
          }, { root: true });
        } else {
          $('#deleteModal').modal('hide');
          dispatch('getCoupons');
          dispatch('updateMessage', {
            message: response.data.message,
            status: 'danger',
          }, { root: true });
        }
      })
    },
  },
  getters: {
    products: state => state.products,
    pagination: state => state.pagination,
    tempProducts: state => state.tempProducts,
    isNew: state => state.isNew,
    fileUploading: state => state.fileUploading,
    orders: state => state.orders,
    coupons: state => state.coupons,
    tempCoupons: state => state.tempCoupons,
  },
});
