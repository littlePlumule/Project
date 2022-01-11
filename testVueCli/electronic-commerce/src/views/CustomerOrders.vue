<template>
  <div>
    <!-- main -->
    <div class="row mt-4">
      <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
        <div class="card border-0 shadow-sm">
          <div style="height: 150px; background-size: cover; background-position: center" :style="{backgroundImage : `url(${item.imageUrl})`}">
          </div>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{item.title}}</a>
            </h5>
            <p class="card-text">{{item.content}}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5" v-if="!item.price">{{item.origin_price}}</div>
              <del class="h6" v-if="item.price">{{item.origin_price}}</del>
              <div class="h5" v-if="item.price">{{item.price}}</div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button type="button" class="btn btn-outline-secondary btn-sm" @click="getProduct(item.id)">
              <i class="fas fa-spinner fa-spin" v-if="loadingItem === item.id"></i>
              查看更多
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm ml-auto" @click="addToCart(item.id)">
              <i class="fas fa-spinner fa-spin" v-if="loadingItem === item.id"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- pagination -->
      <pagination :pagination="pagination" @emitgetProducts="getProducts"/>
    <!-- table -->
    <div class="container"  v-if="cart.carts.length > 0">
      <table class="table mx-auto" >
        <thead class="thead-dark">
          <th></th>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="item in cart.carts" :key="item.id">
            <td class="align-middle">
              <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)">
                <i class="far fa-trash-alt"></i>
              </button>
            </td>
            <td class="align-middle">
              {{ item.product.title }}
              <div class="text-success" v-if="item.coupon">
                已套用優惠券
              </div>
            </td>
            <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="align-middle text-right">{{ item.final_total }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-right">總計</td>
            <td class="text-right">{{ cart.total }}</td>
          </tr>
          <tr v-if="cart.final_total !== cart.total">
            <td colspan="3" class="text-right text-success">折扣價</td>
            <td class="text-right text-success">{{ cart.final_total }}</td>
          </tr>
        </tfoot>
      </table>
      <div class="input-group mb-3 input-group-sm">
        <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
            套用優惠碼
          </button>
        </div>
      </div>
    </div>
    <!-- model -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <span class="text-primary">{{product.title}}</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-danger">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid w-100" alt="">
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{product.content}}</p>
              <footer class="blockquote-footer text-right">{{product.description}}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5" v-if="!product.price">{{product.origin_price}} 元</div>
              <del class="h6" v-if="product.price">原價 {{product.origin_price}} 元</del>
              <div class="h5" v-if="product.price">現在只要 {{product.price}} 元</div>
            </div>
            <select name="" class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                選購 {{num}} {{product.unit}}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計<strong>{{Number(product.num) * Number(product.price)}}</strong> 元
            </div>
            <button type="button" class="btn btn-primary" @click="addToCart(product.id, product.num)">加到購物車</button>
          </div>
        </div>
      </div>
    </div>
    <!-- list -->
    <div class="my-5 row justify-content-center">
      <form class="col-md-6" @submit.prevent="createOrder">
        <div class="form-group">
          <label for="useremail">Email</label>
          <input type="email" class="form-control" name="email" id="useremail" :class="{'is-invalid': errors.has('email')}"
            v-model="form.user.email" v-validate="'required|email'" placeholder="請輸入 Email">
          <span class="text-danger" v-if="errors.has('email')">
            {{ errors.first('email') }}
          </span>
        </div>
      
        <div class="form-group">
          <label for="username">收件人姓名</label>
          <input type="text" class="form-control" name="name" id="username" :class="{'is-invalid': errors.has('name')}"
            v-model="form.user.name" v-validate="'required'" placeholder="輸入姓名">
          <span class="text-danger" v-if="errors.has('name')">姓名欄位不得留空</span>
        </div>
      
        <div class="form-group">
          <label for="usertel">收件人電話</label>
          <input type="tel" class="form-control" name="tel" id="usertel" :class="{'is-invalid': errors.has('tel')}"
           v-validate="'required'" v-model="form.user.tel" placeholder="請輸入電話">
          <span class="text-danger" v-if="errors.has('tel')">電話欄位不得留空</span>
        </div>
      
        <div class="form-group">
          <label for="useraddress">收件人地址</label>
          <input type="text" class="form-control"  name="address" id="useraddress" :class="{'is-invalid': errors.has('address')}"
           v-validate="'required'" v-model="form.user.address"
            placeholder="請輸入地址">
          <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
        </div>
      
        <div class="form-group">
          <label for="comment">留言</label>
          <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
        </div>
        <div class="text-right">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import pagination from '../components/pagination';
import { createNamespacedHelpers } from 'vuex';
const { mapGetters, mapActions } = createNamespacedHelpers('client');

export default {
  name:'Dashboard',
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  components: {
    pagination,
  },
  computed: {
    coupon_code: {
      get(){
        return this.$store.state.coupon_code;
      },

      set(val){
        this.$store.commit('client/COUPON_CODE', val);
      }
    },
    ...mapGetters(['products', 'pagination', 'product', 'loadingItem', 'cart']),
  },
  methods: {
    ...mapActions(['getCart', 'addCouponCode']),
    getProducts(page = 1) {
      this.$store.dispatch('client/getProducts', page);
    },
    getProduct(id) {
      this.$store.dispatch('client/getProduct', id);
    },
    addToCart(id, qty = 1) {
      this.$store.dispatch('client/addToCart', {id, qty});
    },
    removeCartItem(id) {
      this.$store.dispatch('client/removeCartItem', id);
    },
    createOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const order = vm.form;
      vm.$validator.validate().then(valid => {
        if (valid) {
          vm.$store.dispatch('updateLoading', true);
          vm.$http.post(url, {data: order}).then((response) => {
            // vm.getCart();
            if (response.data.success) {
              vm.$store.dispatch('updateMessage', {
                message: response.data.message,
                status: 'success',
              });
              vm.$router.push(`/customer_checkout/${response.data.orderId}`);
            } else {
              vm.$store.dispatch('updateMessage', {
                message: response.data.message,
                status: 'danger',
              });
            }
            vm.$store.dispatch('updateLoading', false);
          });
        } else {
          vm.$store.dispatch('updateMessage', {
                message: '欄位不得為空',
                status: 'danger',
              });
        }
      });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
}
</script>
