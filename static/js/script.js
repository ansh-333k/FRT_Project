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
      activeIndex: 0,
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
  mounted() {
    this.startCarousel();
  },
  beforeDestroy() {
    this.stopCarousel();
  },
  methods: {
    startCarousel() {
      this.carouselInterval = setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.response.length;
      }, 3000); // Set the interval duration (e.g., 3 seconds)
    },
    stopCarousel() {
      clearInterval(this.carouselInterval);
    },
  },
  template: `
    <div class="destination-card">
      <div class="carousel-group">
        <div class="carousel">
          <div v-for="(place, index) in response" :key="index" :class="{ 'carousel-item': true, 'active': index === activeIndex }">
            <img :src="place.img1" :alt="'Image ' + (index + 1)">
          </div>
        </div>
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

app.directive("carousel", {
  mounted(el) {
    el.classList.add("carousel");
  },
});


app.mount('#app')
