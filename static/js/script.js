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
    <section id="hero" style="padding: 50.0;"> 	
      <div class="hero-content">
        <h2>Incredible India!</h2>
        <h3>Be the part of this wonderful journey.</h3>
      </div>
    </section>
    <main id="home">
      <div class="animated-heading">
        <h2 style="text-align: center;font-size: 40px;font-family:Arial, Helvetica, sans-serif;">Categories</h2>
      </div>
      <section class="category-grid">
        <div v-for="category in response" class="category">
          <router-link :to="{ name: 'Category', params: { category: category.name } }">
            <img :src="category.image" :alt="category.name">
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
  <div class="slider">
  <div class="images">
      <input type="radio" name="slide" id="img1" checked>
      <input type="radio" name="slide" id="img2">
      <input type="radio" name="slide" id="img3">
      <input type="radio" name="slide" id="img4">
      <input type="radio" name="slide" id="img5">
      <input type="radio" name="slide" id="img6">

      <div class="m1"><img :src="place.img1" alt="Image 1"></div>
      <div class="m2"><img :src="place.img2" alt="Image 2"></div>
      <div class="m3"><img :src="place.img3" alt="Image 3"></div>
      <div class="m4"><img :src="place.img4" alt="Image 4"></div>
      <div class="m5"><img :src="place.img5" alt="Image 5"></div>
      <div class="m6"><img :src="place.img6" alt="Image 6"></div>

  </div>
  <div class="dots">
      <label for="img1"></label>
      <label for="img2"></label>
      <label for="img3"></label>
      <label for="img4"></label>
      <label for="img5"></label>
      <label for="img6"></label>
  </div>
  <div class="destination-details" style="background: linear-gradient(to top,rgb(0, 221, 255), #ffffff);">
      <div class="destination">
        <h2 class="destination-name">{{ place.name }}</h2>
        <div class="rating">Rating: {{ place.rating }}/5</div>
      </div>
      <p class="location">Location: {{ place.location }}</p>
      <p class="caption">{{ place.caption }}</p>
      <p class="best-time">Best Time to Visit: {{ place.best_time }}</p>
      <p class="text">{{ place.description }}</p>
    </div>      
</div>
  ` 
}

const routes = [
  { name: 'Home', path: '/', component: Home },
  { name: 'Category', path: '/:category', component: Category },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})
const app = Vue.createApp({})
app.use(router)
app.mount('#app')
