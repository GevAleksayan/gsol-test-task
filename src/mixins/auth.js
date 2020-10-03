export default {
  data() {
    return {
      errorMsgFromApi: '',
    }
  },
  methods: {
    auth(url) {
      this.$store.dispatch('auth', {
        url: url,
        fields: this.fields
      }).then(response => {
        console.log(response.error, 'resp data')
        if (response.error) {
          this.errorMsgFromApi = response.error.message
        } else {
          this.$router.push({ path: '/' });
        }
      })
    },
    removeError(field) {
      this.errorMsgFromApi = '';
      delete this.errorsFromApi[field];
    }
  }
}