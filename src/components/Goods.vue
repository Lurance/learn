<template>
  <div id="goods" class="goods-box">
    <ul class="goods-body">
      <li v-for="(list,index) in goods.goodsData" :key="list.id">
        <div class="goods-main">
          <img :src="list.image">
        </div>
        <div class="goods-info">
          <h3 class="goods-title">{{ list.title }}</h3>
          <p class="goods-price">¥ {{ list.price }}</p>
          <div class="goods-compute">
            <span class="goods-reduce" @click="goodsReduce(index)">-</span>
            <input readonly v-model="list.num" />
            <span class="goods-add" @click="goodsAdd(index)">+</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="goods-footer">
      <div class="goods-total">
        合计：¥ {{ goods.totalPrice }}
        <!--
            getters里面的数据可以直接这样写
            {{ totalPrice }}
        -->
      </div>
      <button class="goods-check" :class="{activeChecke: goods.totalNum <= 0}">去结账({{ goods.totalNum }})</button>
    </div>
  </div>
</template>


<script>
  import {mapState,mapGetters,mapMutations} from 'vuex';

  export default {
    name: 'Goods',
    computed: {
      ...mapState(['goods']),
      ...mapGetters(['totalPrice, totalNum'])
    },
    methods: {
      ...mapMutations(['reduceGoods','addGoods']),
    }
  }
</script>
