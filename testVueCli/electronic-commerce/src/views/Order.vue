<template>
  <div>
    <!-- loading -->
    <loading :active.sync="isLoading"></loading>
    <!-- table -->
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">購買時間</th>
          <th>Email</th>
          <th width="400">購買款項</th>
          <th width="120">應付金額</th>
          <th width="120">是否付款</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>{{item.create_at|date}}</td>
          <td>{{item.user.email}}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, key) in item.products" :key="key">
              {{product.product.title}} : {{product.qty}}{{product.product.unit}}
              </li>
            </ul>
          </td>
          <td class="text-right">
            {{item.total | currency}}
          </td>
          <td>
            <span v-if="item.is_paid" class="text-success"> 已付款 </span>
            <span v-if="!item.is_paid" class="text-danger"> 尚未啟用 </span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm" @click.prevent="openOrderModal(item)">編輯</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- pagination -->
    <pagination :pagination="pagination" @emitgetProducts="getOrders"/>
    <!-- modal -->
    <div
      class="modal fade"
      id="orderModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>編輯訂單</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-danger">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
                <div class="form-group col-12">
                  <label for="create-time">購買時間</label>
                  <input
                    type="date"
                    v-model="tempOrder.create_at"
                    class="form-control"
                    id="create-time"
                    placeholder="請輸入購買時間"
                  />
                </div>

                <div class="form-group col-12">
                  <label for="email">E-mail</label>
                  <input
                    type="email"
                    v-model="tempOrder.user.email"
                    class="form-control"
                    id="email"
                    placeholder="請輸入E-mail"
                  />
                </div>
                <div class="form-row col-12" v-for="product in tempOrder.products" :key="product.id">
                  <div class="form-group col-8">
                    <label for="title">購買款項</label>
                    <input
                    type="text"
                    v-model="product.product.title"
                    class="form-control"
                    id="title"
                    placeholder="請輸入購買款項"
                    />
                  </div>
                  <div class="form-group col-4">
                    <label for="qty">數量</label>
                    <input
                    type="number"
                    v-model="product.qty"
                    class="form-control"
                    id="qty"
                    placeholder="請輸入購買款項"
                    />
                  </div>
                </div>
                <div class="form-group col-12">
                  <label for="percent">應付金額</label>
                  <input
                    type="number"
                    v-model="tempOrder.total"
                    class="form-control"
                    id="percent"
                    placeholder="請輸入應付金額"
                  />
                </div>
                <div class="form-group col-12">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempOrder.is_paid"
                      id="is_paid"
                    />
                    <label class="form-check-label" for="is_paid">是否付款</label>
                  </div>
                </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateOrder">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import pagination from '../components/pagination';

export default {
  components: {
    pagination,
  },
  data() {
    return{
      orders: [],
      pagination: {},
      tempOrder: {
        create_at: 0,
        user: {},
      },
      product: {},
      isLoading: false,
    };
  },
  methods: {
    getOrders(page = 1) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.orders = response.data.orders;
        vm.pagination = response.data.pagination;
        vm.isLoading = false;
      });
    },
    openOrderModal(item) {
      this.tempOrder = Object.assign({}, item);
      this.tempOrder.create_at = this.filterDate(this.tempOrder.create_at);
      $('#orderModal').modal('show');
    },
    updateOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/order/${vm.tempOrder.id}`;
      vm.$http.put(url, {data: vm.tempOrder}).then((response) => {
        if (response.data.success) {
          $('#orderModal').modal('hide');
          vm.getOrders();
          this.$bus.$emit('message:push', response.data.message, 'success');
        } else {
          $('#orderModal').modal('hide');
          vm.getOrders();
          this.$bus.$emit('message:push', response.data.message, 'danger');
        }
        // vm.products = response.data.products; 
      });
    },
    filterDate(num) {
      let n = Number(num);
      if (!isNaN(n)) {
        n = new Date();
        return n.toISOString().split('T')[0]
      } else {
        return num
      }
    },
  },
  created() {
    this.getOrders();
  },
}
</script>
