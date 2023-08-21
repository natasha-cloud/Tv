const app = Vue.createApp({
  data() {
    return {
      bulbStatus: 'Bulb is off',
      isBulbOn: false
    };
  },
  methods: {
    turnOn() {
      this.bulbStatus = 'Bulb is on';
      this.isBulbOn = true;
    },
    turnOff() {
      this.bulbStatus = 'Bulb is off';
      this.isBulbOn = false;
    },
    toggleBulb() {
      this.isBulbOn = !this.isBulbOn;
      this.bulbStatus = this.isBulbOn ? 'Bulb is on' : 'Bulb is off';
    }
  }
});

app.mount('#cse');
