<template>
  <div class="home">

    <div class="container">
      <input type="text" v-model="keysearch" class="form-control m-3" placeholder="Search Country Name">

      <button class="btn" :class="sortDirection=='asc'?'btn-primary':'btn-secondary'" @click="sortBy('asc')">ASC</button>
      <button class="btn" :class="sortDirection=='desc'?'btn-primary':'btn-secondary'" @click="sortBy('desc')">DESC</button>
      <div class="row">
        <div class="card col-md-3" style="width: 18rem;" v-for="(c,i) in listCountries" :key="i">
          <img class="card-img-top" :src="c.flags.png" :alt="c.name.official">
          <div class="card-body">
            <h5 class="card-title" @click.prevent="show(i)" style="cursor: pointer;">{{ c.name.official }}</h5>
            <div class="card-text">
              <ul>
                <li>{{ c.name.official }}</li>
                <li>{{ c.cca2 }}</li>
                <li>{{ c.cca3 }}</li>
                <li v-if="c.name.nativeName && c.name.nativeName.zho">
                  {{ c.name.nativeName.zho.official }}
                </li>
                <li><template v-for="(alt,i) in c.altSpellings" :key="i">{{ alt }},</template></li>
                <li>{{ c.idd.root }}<template v-if="c.idd.suffixes">{{ c.idd.suffixes[0] }}</template></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <b-pagination v-model="currentPage" :per-page="perPage" :total-rows="totalRow"></b-pagination>
      </div>
</div>
</template>

<script>
import ResAxios from "@/Services/ResAxios"
export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return{
      countries:[],
      currentPage:1,
      perPage:25,
      keysearch:"",
      sortDirection:"",
      modalVisible:false,

    }
  },
  computed:{
    listCountries(){
      //search
      const search=this.countries.filter((c)=>{
        if(c.name.official.toLowerCase().match(this.keysearch.toLowerCase())){
          return c;
        }
      })
      //pagination
      return search.slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage) ;
    },
    totalRow(){
      return this.countries.length;
    }
  },
  mounted(){
    this.getCountries();
  },
  methods:{
    getCountries(){
        ResAxios.get("/all").then((res)=>{
          this.countries=res.data;
          console.log(this.countries);
        }).catch((err)=>{
          console.log(err);
        }).finally(()=>{
          console.log("funally");
      })
    },
    show(key){
      console.log(this.listCountries[key]);
      // this.$refs.modalDetails.show()

      // this.modalVisible=true
     
    },
    sortBy(sortDirection){
      // alert("test");
    
      if(sortDirection=='asc'){
        // Name A to Z
        this.sortDirection ='asc';
        this.listCountries=this.countries.sort((a, b) => (a.name.official > b.name.official ? 1 : -1))
      }else{
          // Name Z to A
          this.sortDirection ='desc';
          this.listCountries=this.countries.sort((a, b) => (a.name.official > b.name.official ? -1 : 1))
      }
    },

    
  }
 


}
</script>
