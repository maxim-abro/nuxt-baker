<template>
  <div :key="id" class="col">
    <div class="card">
      <div class="img-wrap">
        <img :src="arr.img" style="max-height: 15rem" class="card-img-top" :alt="arr.title" @click="toCard(arr._id)">
      </div>
      <div class="card-body">
        <h5 class="card-title" @click="toCard(arr._id)">
          {{ arr.title }}
        </h5>
      </div>

      <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex align-items-center">
          <img style="height: 1.3rem; margin-right: 0.5rem" src="/img/clock.svg" alt="время">{{ arr.cookingTime }}
        </li>
        <li class="list-group-item d-flex align-items-center">
          <img style="height: 1.3rem; margin-right: 0.5rem" src="/img/calendar.svg" alt="календарь">{{ dates }}
        </li>
      </ul>

      <div class="card-footer bg-white d-flex justify-content-end pr-1">
        <button class="btn btn-like-comment mx-3 p-0">
          <svg
            id="Layer_1"
            class="svg-like-comment"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="64px"
            height="64px"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
            xml:space="preserve"
          >
            <g>
              <path
                fill="#231F20"
                d="M60,0H16c-2.211,0-4,1.789-4,4v8H4c-2.211,0-4,1.789-4,4v28c0,2.211,1.789,4,4,4h8v12
                c0,1.617,0.973,3.078,2.469,3.695C14.965,63.902,15.484,64,16,64c1.039,0,2.062-0.406,2.828-1.172L33.656,48H48
                c2.211,0,4-1.789,4-4v-8h8c2.211,0,4-1.789,4-4V4C64,1.789,62.211,0,60,0z M48,42c0,1.105-0.895,2-2,2c0,0-10.689,0-12.344,0
                s-2.828,1.172-2.828,1.172L16,60V46c0-1.105-0.895-2-2-2H6c-1.105,0-2-0.895-2-2V18c0-1.105,0.895-2,2-2h40c1.105,0,2,0.895,2,2V42
                z M60,30c0,1.105-0.895,2-2,2h-6V16c0-2.211-1.789-4-4-4H16V6c0-1.105,0.895-2,2-2h40c1.105,0,2,0.895,2,2V30z"
              />
              <path fill="#231F20" d="M14,28h10c1.105,0,2-0.895,2-2s-0.895-2-2-2H14c-1.105,0-2,0.895-2,2S12.895,28,14,28z" />
              <path fill="#231F20" d="M38,32H14c-1.105,0-2,0.895-2,2s0.895,2,2,2h24c1.105,0,2-0.895,2-2S39.105,32,38,32z" />
            </g>
          </svg>
          {{ arr.comments.length }}
        </button>
        <button :disabled="loadLike" class="btn btn-like-comment p-0" @click="liked">
          <svg
            id="Layer_1"
            class="svg-like-comment"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
            xml:space="preserve"
          >
            <path
              fill="#231F20"
              d="M48,7.965c-4.418,0-8.418,1.793-11.312,4.688L32,17.309l-4.688-4.656C24.418,9.758,20.418,7.965,16,7.965
                    c-8.836,0-16,7.164-16,16c0,4.418,1.57,7.258,5.75,11.438l23.422,23.426c1.562,1.562,4.094,1.562,5.656,0l23.359-23.363
                    C62.32,31.332,64,28.383,64,23.965C64,15.129,56.836,7.965,48,7.965z M56,31.965l-24,24l-24-24c-1.484-1.484-4-4.082-4-8
                    c0-6.627,5.373-12,12-12c3.562,0,6.764,1.551,8.963,4.02c0.539,0.607,4.6,5.98,7.037,5.98c2.531,0,6.52-5.4,7.074-6.018
                    c2.195-2.443,5.381-3.982,8.926-3.982c6.627,0,12,5.373,12,12C60,27.92,58.023,29.941,56,31.965z"
            />
          </svg>
          {{ arr.likes }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['arr', 'id'],
  data () {
    return {
      loadLike: false,
      dates: ''
    }
  },
  fetch () {
    const d = new Date(this.arr.date * 1)
    this.dates = `${d.getDate() + 1}.${d.getMonth() + 1}.${d.getFullYear()}`
  },
  methods: {
    toCard (id) {
      this.$router.push(`/recipe/${id}`)
    },
    liked () {
      const like = 1 + this.arr.likes
      this.$emit('like', like, this.arr._id)
    }
  }
}
</script>

<style scoped lang="scss">
  .card-body {
    height: 90px;
  }
  .btn-like-comment {
    transition: 0.3s;
    .svg-like-comment {
      transition: 0.3s;
      height: 1.5rem;
      width: 1.5rem;
    }
    &:hover {
      transition: 0.3s;
      color: #ad5472;
      .svg-like-comment {
        path {
          fill: #ad5472;
          transition: 0.3s;
        }
      }
    }
  }

  .card {
    transition: 0.3s;
    &-body {
      .card-title {
        transition: 0.3s;
        &:hover {
          transition: 0.3s;
          color: #ad5472;
        }
      }
    }
    &:hover {
      transition: 0.3s;
      cursor: pointer;
      -webkit-box-shadow: 3px 4px 4px 0 rgba(34, 60, 80, 0.2);
      -moz-box-shadow: 3px 4px 4px 0 rgba(34, 60, 80, 0.2);
      box-shadow: 3px 4px 4px 0 rgba(34, 60, 80, 0.2);
    }
  }
</style>
