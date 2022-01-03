<template>
  <div>
    <!-- loading -->
    <loading :active.sync="isLoading"></loading>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModal(true)">建立新的優惠券</button>
    </div>
    <!-- table -->
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">名稱</th>
          <th width="80">折扣百分比</th>
          <th width="80">到期日</th>
          <th width="80">是否啟用</th>
          <th width="80">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{item.title}}</td>
          <td>{{item.percent}}</td>
          <td>{{item.due_date|date}}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟為</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- pagination -->
    <pagination :pagination="pagination" @emitgetProducts="getCoupons"/>
    <!-- modal -->
    <div
      class="modal fade"
      id="couponsModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增優惠券</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-danger">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
                <div class="form-group col-12">
                  <label for="title">標題</label>
                  <input
                    type="text"
                    v-model="tempCoupons.title"
                    class="form-control"
                    id="title"
                    placeholder="請輸入優惠券名稱"
                  />
                </div>

                <div class="form-group col-12">
                  <label for="code">優惠碼</label>
                  <input
                    type="text"
                    v-model="tempCoupons.code"
                    class="form-control"
                    id="code"
                    placeholder="請輸入優惠碼"
                  />
                </div>
                <div class="form-group col-12">
                  <label for="due_date">到期日</label>
                  <input
                    type="date"
                    v-model="tempCoupons.due_date"
                    class="form-control"
                    id="due_date"
                    placeholder="請輸入到期日"
                  />
                </div>

                <div class="form-group col-12">
                  <label for="percent">折扣百分比</label>
                  <input
                    type="number"
                    v-model="tempCoupons.percent"
                    class="form-control"
                    id="percent"
                    placeholder="請輸入售價"
                  />
                </div>
                <div class="form-group col-12">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempCoupons.is_enabled"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateCoupon">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- delModal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span class="text-danger">刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-danger">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除<strong class="text-danger">{{tempCoupons.title}}</strong>商品 (刪除後將無法恢復!)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click.pervent="deleteCoupon">確認</button>
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
      coupons: [],
      pagination: {},
      tempCoupons: {},
      isNew: false,
      isLoading: false,
    };
  },
  methods: {
    getCoupons(page = 1) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      vm.isLoading = true;
      vm.$http.get(url).then((response) => {
        vm.coupons = response.data.coupons;
        vm.pagination = response.data.pagination;
        vm.isLoading = false;
      })
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempCoupons = {};
        this.isNew = true;
      } else {
        this.tempCoupons = Object.assign({}, item);
        this.isNew = false;
      }
      $('#couponsModal').modal('show');
    },
    openDelModal(item) {
      this.tempCoupons = item;
      $('#deleteModal').modal('show');
    },
    updateCoupon() {
      const vm = this;
      let url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
      let httpMethod = 'post';
      if (!vm.isNew) {
        url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupons.id}`;
        httpMethod = 'put';
      }
      vm.$http[httpMethod](url, {data: vm.tempCoupons}).then((response) => {
        if (response.data.success) {
          $('#couponsModal').modal('hide');
          vm.getCoupons();
          vm.$bus.$emit('message:push', response.data.message, 'success');
        } else {
          $('#couponsModal').modal('hide');
          vm.getCoupons();
          vm.$bus.$emit('message:push', response.data.message, 'success');
        }
      });
    },
    deleteCoupon() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupons.id}`;
      vm.$http.delete(url).then((response) => {
        if (response.data.success){
          $('#deleteModal').modal('hide');
          vm.getCoupons();
          vm.$bus.$emit('message:push', response.data.message, 'success');
        } else {
          $('#deleteModal').modal('hide');
          vm.getCoupons();
          vm.$bus.$emit('message:push', response.data.message, 'danger');
        }
      })
    },
  },
  created() {
    this.getCoupons();
  }
}
</script>
