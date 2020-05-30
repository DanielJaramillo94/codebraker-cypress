<template>
  <div class="about">
    <h1 class="page-name">CodeBreaker!!</h1>
    <div class="search-group">
      <b-form-input class="search-input" id="code" v-model="item" placeholder="Input your number!"
      @keypress="enterPressed($event)"></b-form-input>
      <md-button
        id="play"
        class="md-raised md-primary search-button"
        @click="onClickSearch">
        Play!
      </md-button>
    </div>
    <div class="api-container">
      <div class="results-container">
        <template v-if="thereIsSearchResults">
          <card-results
            :results-data="searchResults"/>
        </template>
        <template v-else>
          <p id="codeBreakerResults">{{ searchResults }}</p>
        </template>
      </div>
    </div>
    <b-pagination v-if="thereIsSearchResults"
      v-model="currentPage"
      :total-rows="totalResults"
      :per-page="limit"
      @input="pageChanged"/>
  </div>
</template>

<script>
// import axios from 'axios'
import mercadoLibreAPI from '../services/mercadolibre.service'
import { BPagination } from 'bootstrap-vue'
import { BFormInput } from 'bootstrap-vue'

/* eslint-disable */

export default {
  name: 'MercadoAPI',
  components: {
    BPagination,
    BFormInput,
  },
  data() {
    return {
      searchResults: 'There is no results yet!',
      thereIsSearchResults: false,
      item: '',
    }
  },
  methods: {
    async onClickSearch() {
      this.thereIsSearchResults = false
      this.searchResults = "buscando..."
      try {
        let response = await mercadoLibreAPI.getResult(this.item)
        this.searchResults = response.data.result
      } catch (error) {
        console.error(error)
        this.searchResults = 'ERROR!'
      }
    },
    enterPressed(event) {
      if (event.keyCode === 13) {
        this.onClickSearch()
      }
    }
  },
}
</script>

<style scoped>
.page-name {
  padding: 20px;
}
.search-group{
  display: flex;
  width: 100%;
  justify-content: center;
}
.search-input {
  width: 30%;
}
.api-container {
  display: flex;
  padding: 20px;
}
.search-button {
  margin-top: -1px;
  align-items: center;
}
.results-container {
  background-color: #dedede;
  width: 100%;
  min-height: 80px;
  padding: 1em;
}
</style>