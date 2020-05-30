<template>
  <div class="card-container">
    <div class="name">
      <p>{{ itemData.title }}</p>
    </div>
    <div class="imgNbox">
      <img
        :src="itemData.thumbnail"
        alt="image thumnail">
      <div class="box">
        <p>${{ itemData.price }}</p>
      </div>
    </div>
    <div class="info">
      <div class="seller">
        <div class="nickname">
          <span>{{ seller }}</span>
        </div>
        <div class="id">
          <span>{{ itemData.seller.id }}</span>
        </div>
      </div>
      <div class="link"/>
    </div>
  </div>
</template>

<script>
import mercadoLibreAPI from '../services/mercadolibre.service'
/* eslint-disable */

export default {
  name: 'ItemCard',
  data() {
    return {
      limit: 40,
      seller: '',
    }
  },
  props: {
    itemData: {
      type: Object,
      default: function () {
        return {}
      }
    },
  },
  async created() {
    this.seller = await mercadoLibreAPI.getSeller(this.itemData.seller.id)
    this.seller = this.seller.data.seller.nickname
  }
}
</script>
<style scoped>
.card-container {
 display: flex;
 flex-direction: column;
 background-color: white;
 width: 270px;
 height: 230px;
 margin: 7px 7px 7px 7px;

 border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  transition: all 0.3s ease-in-out;
}
.card-container:hover {
  cursor: pointer;
  transform: scale(1.03, 1.03);
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  transition: all 0.1s ease-in-out;
}
.name {
  background-color: #448aff;
  display: flex;
  justify-content: center;
  border-radius: 5px 5px 0px 0px;
  width: 270px;
  height: 50px;
  padding: 5px;
}
.name p {
  font-size: 1.4em;
  margin: 0.8px;
  padding: 0;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.imgNbox {
  display: flex;
  padding: 0 10px 0 10px;
  max-height: 150px;
  width: 100%;
}
img {
  margin: 15px 15px 10px 0px;
  width: 100px;
  height: 100px;
}
.box {
  width: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.86em;
}
.box p {
  font-size: 1.7em;
  padding: 10px;
  overflow-wrap: break-word;
}
.info {
  flex-grow: 4;
  width: 100%;
  display: flex;
  justify-content: center;
}
.seller {
  display: flex;
  flex-direction: column;
  width: fit-content; 
}
.info .seller .nickname {
  font-size: 1.15em;
}
.info .seller .id {
  font-size: 0.7em;
  align-self: flex-end;
  color: darkgrey;
  margin-top: -6px;
}

</style>