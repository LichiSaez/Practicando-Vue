const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter + num;
    },
    setName(input, lastName) {
      this.name = input.target.value + ' ' + lastName;
    }
  }
});

app.mount('#events');
