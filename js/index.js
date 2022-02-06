import vHeader from './header.js'
import vFooter from './footer.js'
import vHome from './home/index.js'
import vWasm from './wasm/index.js'

const vAside = {
   props: ['routes'],
   emits: ['click'],
   template: `
      <el-menu>
         <template v-for="(route, i) in routes">
            <el-menu-item :index="i.toString()" @click="$emit('click', route)">{{ route }}</el-menu-item>
         </template>
      </el-menu>
   `
}

const vMain = {
   data() {
      return {
         pages: {
            'Home': Vue.shallowRef(vHome),
            'Wasm': Vue.shallowRef(vWasm)
         },
         NotFoundPage: { template: '<p>Page not found</p>' }
      }
   },
   props: ['currentRoute'],
   computed: {
      CurrentComponent() {
         return this.pages[this.currentRoute] || this.NotFoundPage
      }
   },

   render() {
      return Vue.h(this.CurrentComponent)
   }
}

const vRoot = {
   data() {
      return {
         routes: ["Home", "Wasm"],
         currentRoute: "Home"
      }
   },
   components: {
      'vheader': vHeader,
      'vmain': vMain,
      'vaside': vAside,
      'vfooter': vFooter
   },
   methods: {
      go(route) {
         this.currentRoute = route
      }
   },
   template: `
      <div class='vroot'>
         <el-container>
            <el-header> <vheader/> </el-header>
            <el-container>
               <el-aside width="200px"> <vaside :routes="routes" @click="go"/> </el-aside>
               <el-container>
                  <el-main> <vmain :current-route="currentRoute" /> </el-main>
                  <el-footer> <vfooter/> </el-footer>
               </el-container>
            </el-container>
         </el-container>
      </div>
   `
}

export default vRoot;
