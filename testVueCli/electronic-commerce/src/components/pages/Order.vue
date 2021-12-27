<template>
  <div>
    <loading :active.sync="isLoading"></loading>
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
          <td></td>
          <td></td>
          <td></td>
          <td class="text-right">
            
          </td>
          <td>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm">編輯</button>
            <button class="btn btn-outline-danger btn-sm">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- pagination -->
    <pagination :pagination="pagination" @emitgetProducts="getOrders"/>

  </div>
</template>

<script>
import $ from 'jquery';
import pagination from '../pagination';
export default {
  components: {
    pagination,
  },
  data() {
    return{
      orders: [],
      pagination: {},
      isLoading: false,
    };
  },
  methods: {
    getOrders(page = 1) {
      const vm = this;
      vm.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
      this.$http.get(url).then((response) => {
        console.log(response.data);
        vm.isLoading = false;
        vm.orders = response.data.orders;
        vm.pagination = response.data.pagination;
      })
    }
  },
  created() {
    this.getOrders();
  },
}
</script>
