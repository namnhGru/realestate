<template>
  <div id="landing-footer__div--footer">
    <nav>
      <ul>
        <li v-for="(menu,i) in first_nav" :key="i">
          <p>{{ menu.main }}<i class="fas fa-angle-down"></i></p>
        </li>
      </ul>
    </nav>
    <nav>
      <ul>
        <li v-for="(menu,i) in second_nav" :key="i">
          <p>{{ menu }}</p>
        </li>
      </ul>
    </nav>
    <footer>
      <p class="footer__p--disclaimer">{{ disclaimer.main_text }}<span><a :href="disclaimer.url">{{ disclaimer.anchor }}</a></span></p>
      <nav>
        <p class="footer__p--company"><span><i :class="company_logo"></i></span>{{ company_title }}</p>
        <div class="footer__div--follow">
          <p>{{ follow_text }}</p>
          <ul>
            <li v-for="(logo, i) in follow_logos" :key="i">
              <p><i :class="logo"></i></p>
            </li>
          </ul>
        </div>
        <div class="footer__div--copyright">
          <p>{{ year_establish }}</p>
          <p><i :class="home_logo"></i></p>
        </div>
      </nav>
      <img :src="footer_img" :alt="company_title">
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LandingFooter',
  props: {
    first_nav: Array,
    second_nav: Array,
    disclaimer: Object,
    company_title: String,
    company_logo: String,
    follow_text: String,
    follow_logos: Array,
    year_establish: String,
    home_logo: String,
    footer_img: String,
  }
}
</script>

<style lang="scss" scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  div#landing-footer__div--footer {
    display: flex;
    flex-direction: column;
    background-color: white;
    nav {
      border-bottom: 2px solid rgba(0, 0, 0, 0.1);
      padding: 20px 0px;
      font-size: 0.8em;
      ul {
      display: flex;
      flex-direction: row;
      list-style: none;
      justify-content: space-around;
      }
    }
    footer {
      margin: 2% 0%;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      .footer__p--disclaimer {
        font-size: 0.7em;
        color: rgba(0, 0, 0, 0.5);
        max-width: 50%;
        span {
          margin-left: 3px;
          a {
            text-decoration: none;
          }
        }
      }
      nav {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        border: none;
        min-width: 25%;

        p.footer__p--company {
          color: rgb(25, 63, 102);
          span {
            margin-right: 3px;
          }
        }
        
        div.footer__div--follow {
          display: flex;
          flex-direction: row;
          ul {
            margin-left: 3px;
            list-style: none;
            font-size: 1.2em;
          }
        }

        div.footer__div--copyright {
          display: flex;
          flex-direction: row;
          p:last-child {
            margin-left: 3px;
          }
        }
      }
      
      img {
        width: 100%;
        height: 180px;
      }
    }
  }
</style>