<template>
  <header class="header shadow mb-5">
    <div class="navbar d-none d-lg-flex navbar-expand-lg navbar-mm bg-mm">
      <div class="container d-flex justify-content-between p-0">
        <div class="left">
          <a href="#" class="social-link">
            <svg
              class="social-svg"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 50 50"
            >
              <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" /></svg>
          </a>
          <a href="" class="social-link" />
        </div>
        <div class="right d-flex">
          <div class="input-group mx-5">
            <button id="button-addon1" class="btn btn-outline-light btn-search" type="button" @click="asyncSearch(qSearch)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125
                     L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16
                     5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4
                     9 C 4 6.2267316 6.2267316 4 9 4 z"
                />
              </svg>
            </button>
            <input type="search" class="form-control" placeholder="поиск" aria-describedby="button-addon1" v-model="qSearch">
          </div>
          <button v-if="!$store.getters['auth/isAuthenticated']" class="btn btn-outline-light" @click="$router.push('/auth')">
            войти
          </button>
          <div class="position-relative user" v-else-if="$store.getters['auth/isAuthenticated']" @mouseleave="authMenu = false">
           <button class="btn btn-mm" @mouseenter="authMenu = true">
             {{ $store.state.auth.name }}
           </button>
           <div class="menu position-absolute" v-if="authMenu">
             <button class="btn btn-mm w-100" @click="$router.push('/admin/')">панель администратора</button>
             <button class="btn w-100 btn-mm" @click="logout">выйти</button>
           </div>
<!--           <div v-if="authMenu" @click="authMenu = false" class="dropdown-bg position-fixed vw-100 vh-100"></div>-->
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container d-flex justify-content-between p-0 px-2 px-lg-0">
        <div class="left">
          <router-link to="/" class="navbar-brand text-mm d-flex align-items-center">
            <svg
              class="svg-logo"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >

              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path
                  d="M2443 5106 c-185 -45 -337 -205 -374 -394 -15 -77 -7 -179 19 -254
l19 -55 -82 -26 c-317 -104 -625 -342 -824 -639 -55 -83 -154 -277 -172 -338
l-11 -37 -88 -6 c-176 -13 -328 -82 -450 -206 -121 -123 -180 -245 -202 -414
-13 -105 2 -226 41 -329 42 -110 154 -254 249 -320 20 -14 53 -127 253 -884
160 -603 240 -888 262 -933 61 -124 208 -235 346 -261 73 -14 2189 -14 2262 0
139 26 285 136 346 261 32 66 133 425 133 473 0 41 -49 86 -95 86 -46 0 -71
-13 -89 -48 -8 -15 -35 -108 -61 -207 -26 -98 -55 -195 -65 -215 -24 -46 -83
-102 -140 -131 l-45 -24 -1095 -3 c-1244 -3 -1159 -8 -1254 79 -29 26 -60 65
-69 86 -15 33 -427 1572 -427 1594 0 5 39 6 88 3 201 -14 397 55 541 193 l44
42 63 -59 c114 -106 303 -180 463 -180 75 0 190 22 260 49 68 28 174 97 228
150 l43 41 42 -41 c55 -54 160 -122 229 -150 250 -98 546 -41 734 142 l51 49
48 -45 c150 -139 336 -206 539 -191 48 3 87 2 87 -3 0 -5 -21 -86 -46 -180
-30 -113 -43 -182 -39 -200 16 -73 109 -101 161 -50 21 22 38 73 94 284 57
214 73 260 92 273 95 66 207 210 249 320 39 103 54 224 41 329 -22 169 -80
289 -202 414 -122 123 -274 193 -450 206 l-88 6 -11 37 c-18 61 -117 255 -172
338 -199 297 -507 535 -824 639 l-82 26 19 55 c113 321 -138 666 -480 661 -31
0 -80 -6 -109 -13z m251 -220 c105 -51 161 -144 161 -266 0 -85 -21 -142 -74
-203 -82 -92 -237 -121 -353 -64 -160 79 -215 278 -118 430 80 126 246 170
384 103z m-404 -686 c168 -108 375 -104 561 11 l36 23 102 -33 c134 -42 314
-134 421 -215 233 -174 424 -439 507 -698 17 -57 35 -92 56 -111 29 -28 30
-29 121 -22 68 5 108 3 160 -9 256 -60 426 -303 387 -556 -50 -331 -404 -522
-706 -381 -67 31 -172 123 -206 179 -35 58 -60 81 -95 88 -45 8 -82 -16 -124
-83 -169 -268 -544 -311 -765 -89 -33 34 -76 83 -95 111 -60 84 -124 84 -182
-2 -162 -239 -421 -316 -665 -197 -69 33 -155 113 -195 180 -37 61 -82 89
-127 79 -31 -7 -56 -31 -90 -87 -34 -57 -134 -144 -204 -177 -356 -170 -767
131 -708 519 40 266 272 445 547 425 86 -6 92 -5 118 17 18 15 37 53 57 113
71 207 175 378 328 537 118 123 232 210 370 282 97 50 294 125 330 126 8 0 35
-13 61 -30z"
                />
                <path
                  d="M1596 1785 c-40 -21 -55 -44 -56 -85 0 -67 179 -1091 195 -1117 22
-33 57 -47 99 -39 46 9 76 47 76 97 0 44 -166 1038 -181 1087 -18 56 -83 83
-133 57z"
                />
                <path
                  d="M2524 1791 c-12 -5 -31 -22 -43 -37 -21 -27 -21 -30 -21 -580 0 -407
3 -560 12 -579 13 -29 55 -55 88 -55 33 0 75 26 88 55 9 19 12 172 12 580 l0
555 -27 30 c-30 32 -75 45 -109 31z"
                />
                <path
                  d="M3442 1785 c-21 -9 -38 -26 -46 -47 -16 -39 -186 -1046 -186 -1099 0
-95 123 -134 175 -56 16 25 195 1048 195 1118 0 39 -26 74 -67 90 -30 11 -31
11 -71 -6z"
                />
                <path
                  d="M4138 1254 c-85 -46 -51 -184 45 -184 43 0 92 38 100 77 7 40 -16 89
-52 107 -37 20 -58 20 -93 0z"
                />
              </g>
            </svg>
            &nbsp;Anna-baker
          </router-link>
        </div>
        <div id="navbarNav" class="collapse navbar-collapse justify-content-end">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink class="nav-link link-mm pl-1" style="padding-right: 0" to="/">
                ГЛАВНАЯ
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link link-mm pl-1" style="padding-right: 0" to="/recipes">
                РЕЦЕПТЫ
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link link-mm pl-1" style="padding-right: 0" to="/news">
                НОВОСТИ
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link link-mm pl-1" style="padding-right: 0" to="/articles">
                СТАТЬИ
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link link-mm pl-1" style="padding-right: 0" to="/contacts">
                КОНТАКТЫ
              </NuxtLink>
            </li>
          </ul>
        </div>
        <button class="btn btn-mm d-block d-lg-none" @click="$store.commit('navBar/toggleShow')">
          <fa class="text-white chevron" icon="bars"/>
        </button>
      </div>
    </div>

    <mobile-aside/>
  </header>
</template>

<script>

export default {
  data: () => ({
    authMenu: false,
    qSearch: ''
  }),
  methods: {
    logout() {
      this.$store.commit('auth/logout')
      this.$store.commit('auth/addLocalStorage')
      this.$router.push('/')
    },
    asyncSearch(q) {
      this.$router.push({
        path: '/search',
        query: {
          q: q,
          type: 'name'
        }
      })
      this.qSearch = ''
    }
  }
}
</script>

<style scoped lang="scss">
  .svg-logo {
    height: 3rem;
    path {
      fill: #ad5472;
    }
  }

  .dropdown-bg {
    background: #00000001;
    z-index: 99;
    left: 0vw;
    top: 0vh;
  }

  .user {
    .menu {
      background: #ad5472;
      color: white;
      z-index: 100;
      bottom: -230%;
      left: -100%;
      border-radius: 10px;
      box-shadow: 11px 13px 8px 0 rgba(34, 60, 80, 0.3);
      a {
        color: white;
      }
    }
  }

  .btn-search {
    svg {
      fill: #ffffff;
      transition: 0.15s;
    }
    &:hover {
      svg {
        fill: #ad5472;
        transition: 0.15s;
      }
    }
  }

  .social-svg {
    height: 2rem;
    transition: 0.3s;
    path {
      fill: white;
    }
    &:hover {
      path {
        fill: black;
        transition: 0.3s;
      }
    }
  }

  .header {
    @media screen and (max-width: 992px) {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 100;
      margin-bottom: 30px;
    }
  }
</style>
