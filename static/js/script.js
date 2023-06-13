const host = 'https://tra-well.azurewebsites.net'

const Home = { 
  data() {
    return {
      response: null,
    }
  },
  beforeCreate() {
    fetch(host + `/india`, {
      method: "GET",
      headers: { "Content-Type":"application/json", },
    })
    .then((res) => {
      if(res.status == 200) {
        res.json().then((data) => {
          this.response = data
        })
      }
    })
    .catch(error => { console.log(error) })
  },
  template: `
    <section style="padding: 50.0;"> 	
      <div class="bannerimage">
        <div class="image-blur">
          <img src="https://trawell.blob.core.windows.net/img/Banner.jpg" alt="Banner">
        </div>
        <div class="image-text">
          <p>Incredible India!</p>  
          <h1>Be the part of this Wonderful Journey</h1>
        </div>  
      </div>
    </section>
    <main id="home">
      <div class="animated-heading">
        <h2 style="text-align: center;font-size: 40px;font-family:Arial, Helvetica, sans-serif;">Categories</h2>
      </div>
      <section class="category-grid">
        <div v-for="category in response" class="category">
          <router-link :to="{ name: 'india', params: { category.name } }">
            <img :src="category.image" :alt="category.name"></a>
            <h3> {{ category.name }} </h3>
          </router-link>
        </div>
      </section>
    </main>
  ` 
}

const Category = { 
  data() {
    return {
      response: null,
    }
  },
  beforeCreate() {
    fetch(host + `/india/${this.$route.params.category}`, {
      method: "GET",
      headers: { "Content-Type":"application/json", },
    })
    .then((res) => {
      if(res.status == 200) {
        res.json().then((data) => {
          this.response = data
        })
      }
    })
    .catch(error => { console.log(error) })
  },
  template: `
    <form @submit.prevent="validate">
      <center>
        <br>
        <h2> Register Yourself </h2>
        <br>
        <div>
          <label> E-Mail ID: &nbsp;</label>
          <input type="email" placeholder="E-Mail ID" v-model="email" autocomplete="on" autofocus required>
        </div>
        <br>
        <div>
          <label> Password: &nbsp;</label>
          <input type="password" placeholder="Password" v-model="password" autocomplete="on" autofocus required>
        </div>
        <br>
        <div>
          <label> Re-Enter Password: &nbsp;</label>
          <input type="password" placeholder="Retype Password" v-model="cnf_pass" autocomplete="on" autofocus required>
        </div>
        <br>
        <div>
          <label> Choose your Role: &nbsp;</label>
          <select v-model="role" autocomplete="on" autofocus required>
            <option value=2> Administrator </option>
            <option value=1> Support Staff </option>
            <option value=0> Student </option>
          </select>
        </div>
        <br>
        <button type="submit" class="btn btn-outline-primary"> Register </button>
        <br>
      </center>
    </form>
    <center><h3> Already Registered? <router-link to="/"> LogIn </router-link></h3></center>
    <center v-if="error" class="alert alert-warning" role="alert">
      <p>{{error}}</p>
    </center>
  ` 
}

const routes = [
  { path: '/', component: Home },
  { path: '/:category', component: Category },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})
const app = Vue.createApp({})
app.use(router)
app.mount('#app')