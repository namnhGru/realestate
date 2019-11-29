<template>
  <div>
    <nav-bar 
      class="row"
      :subMenus="NavMenu.lists"
    />
  </div>
  <!-- <div class="container">
    <landing-nav class="row"
      :lists="NavMenu.lists"
      :company_name="NavMenu.company.title"
      :company_logo="NavMenu.company.logo"
    />
    <landing-search class="row" 
      :slogan="SearchRegion.slogan"
      :description="SearchRegion.description"
      :search_placeholder="SearchRegion.placeholder"
      :background_img="SearchRegion.background_img"
    />
    <landing-advert class="column half"
      :first_advert="AdvertRegion.first"
      :second_advert="AdvertRegion.second"
      :cards="AdvertRegion.cards"
    />
    <landing-footer class="column half"
      :first_nav="FooterRegion.first_nav"
      :second_nav="FooterRegion.second_nav"
      :disclaimer="FooterRegion.disclaimer"
      :company_title="FooterRegion.company_title"
      :company_logo="FooterRegion.company_logo"
      :follow_text="FooterRegion.follow_text"
      :follow_logos="FooterRegion.follow_logos"
      :year_establish="FooterRegion.year_establish"
      :home_logo="FooterRegion.home_logo"
      :footer_img="FooterRegion.footer_img"
    />
  </div> -->
</template>

<script>
import NavBar from '@/components/base/NavBar.vue';
// import LandingNav from '@/components/landing/LandingNav.vue';
// import LandingSearch from '@/components/landing/LandingSearch.vue';
// import LandingAdvert from '@/components/landing/LandingAdvert.vue';
// import LandingFooter from '@/components/landing/LandingFooter.vue';

export default {
  components: {
    // LandingNav,
    // LandingSearch,
    // LandingAdvert,
    // LandingFooter,
    // SubMenu,
    NavBar,
  },
  name: 'Landing',
  data() {
    return {
      NavMenu: {
        lists: [
          { title: 'Mua bán', dropdowns: ['Mua', 'Thuê', 'Bán', 'Cho Thuê', 'Tìm môi giới'], },
          { title: 'Quản lý', dropdowns: ['Quản lý thuê', 'Quảng cáo', 'Cá nhân', 'Trợ giúp'], },
          { title: 'Quản lý',  },
          { title: 'Quản lý',  },
          { title: 'Quản lý', dropdowns: ['Quản lý thuê', 'Quảng cáo', 'Cá nhân', 'Trợ giúp'], },
          { title: 'Quản lý', dropdowns: ['Quản lý thuê', 'Quảng cáo', 'Cá nhân', 'Trợ giúp'], },
          { title: 'Quản lý',  },
          { title: 'Quản lý', dropdowns: ['Quản lý thuê', 'Quảng cáo', 'Cá nhân', 'Trợ giúp'], },
        ],
        company: {
          title: 'Gối thơm',
          logo: 'fas fa-igloo',
        }
      },
      SearchRegion: {
        slogan: 'Tưởng tượng lại căn hộ của bạn',
        description: 'Chúng tôi sẽ giúp bạn tìm căn hộ ưa thích',
        placeholder: 'Nhập địa chỉ, thành phố ...',
        background_img: './img/landing_page_background_search.jpg',
      },
      AdvertRegion: {
        first: 'Chúng tôi có đầy đủ danh sách căn hộ bạn cần và cập nhật liên tục',
        second: 'Bạn sẽ không bao giờ lo bỏ lỡ một căn hộ tốt',
        cards: [
          {
            image: './img/landing_page_buy.png', 
            title: 'Mua nhà', 
            description: 'Tìm mua căn nhà mơ ước với vô số hình ảnh, danh mục và những trải nghiệm bạn không tìm thấy trước đây',
            button: 'Tìm nhà', 
          },
          {
            image: './img/landing_page_sell.png', 
            title: 'Bán nhà', 
            description: 'Dù bạn bán nhà theo kiểu truyền thống hay dùng dịch vụ Premium của chúng tôi, chúng tôi cũng sẽ giúp bạn đạt được mục đích với hiệu quả cao nhất',
            button: 'Xem lựa chọn', 
          },
          {
            image: './img/landing_page_rent.png', 
            title: 'Thuê nhà', 
            description: 'Chúng tôi có đủ kiểu nhà cho thuê để bạn lựa chọn, với nhiều mục đích sử dụng khác nhau như bán hàng, nhà ở, văn phòng, từ nhỏ nhất tới lớn nhất',
            button: 'Tìm địa điểm', 
          }
        ]
      },
      FooterRegion: {
        first_nav: [
          { main: 'Giao dịch bất động sản'}, 
          { main: 'Bất động sản cho thuê'}, 
          { main: 'Tỷ lệ thế chấp'}, 
          { main: 'Tìm nhà'}
        ],
        second_nav: ['Về chúng tôi', 'Dự báo giá', 'Nghiên cứu', 'Sự nghiệp', 'Trợ giúp', 'Quảng cáo', 'Điều khoản', 'Hình thức quảng bá', 'Cấu hình Cookie', 'Blog', 'AI', 'Ứng dụng mobile'],
        disclaimer: {
          main_text: 'Gối thơm cam kết đảm bảo khả dụng cho người khuyết tật. Chúng tôi liên tục làm việc để cải thiện trải nghiệm web cho mọi người và chúng tôi rất hoan nghênh các phản hồi về trải nghiệm. Nếu bạn muốn báo cáo một vấn đề về tìm kiếm một chỗ ở, xin vui lòng',
          anchor: 'liên lạc với chúng tôi',
          url: 'https://www.facebook.com/hoangnamsdc',
        },
        company_title: 'Gối thơm',
        company_logo: 'fas fa-igloo',
        follow_text: 'Theo dõi chúng tôi tại',
        follow_logos: ['fab fa-facebook', 'fab fa-github'],
        year_establish: '2019-2020 namnh39.com',
        home_logo: 'fas fa-luggage-cart',
        footer_img: './img/landing_page_footer_img.png'
      }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>