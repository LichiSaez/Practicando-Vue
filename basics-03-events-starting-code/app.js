const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(input) {
      this.name = input.target.value;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
