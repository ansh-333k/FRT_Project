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
    <div v-for="place in response" class="destination-card">
      <div class="carousel-group">
        <div class="carousel">
          <div class="carousel-item active"><img :src="place.img1" alt="Image 1"></div>
          <div class="carousel-item"><img :src="place.img2" alt="Image 2"></div>
          <div class="carousel-item"><img :src="place.img3" alt="Image 3"></div>
          <div class="carousel-item"><img :src="place.img4" alt="Image 4"></div>
          <div class="carousel-item"><img :src="place.img5" alt="Image 5"></div>
          <div class="carousel-item"><img :src="place.img6" alt="Image 6"></div>
        </div>
      </div>
      <div class="destination-details">
        <div class="destination">
          <h2 class="destination-name">{{ place.name }}</h2>
          <div class="rating">Rating: {{ place.rating }}/5</div>
        </div>
        <p class="location">Location: {{ place.location }}</p>
        <p class="caption">{{ place.caption }}</p>
        <p class="best-time">Best Time to Visit: {{ place.best_time }}</p>
        <p class="text">
          {{ place.description.substring(0,500) }}
          <span class="dots"> ...</span>
          <span class="moreText">{{ place.description.substring(501) }}</span>
        </p>
        <button class="read-more-btn">Read More</button> 
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