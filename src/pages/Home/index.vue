<template>
  <v-main>
    <div class="heroBlock mt-5">
      <v-carousel cycle hide-delimiters hide-delimiter-background>
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        </v-carousel-item>
      </v-carousel>
      <v-container class="hidden-sm-and-down">
        <v-row>
          <v-col cols="3"
            ><v-card class="mt-5 mx-auto" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">OVERLINE</div>
                  <v-list-item-title class="text-h5 mb-1">
                    Headline 5
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >Greyhound divisely hello coldly
                    fonwderfully</v-list-item-subtitle
                  >
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                ></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn outlined rounded text> Button </v-btn>
              </v-card-actions>
            </v-card></v-col
          >
          <v-spacer />
          <v-col cols="3"
            ><v-card class="mt-5 mx-auto" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">OVERLINE</div>
                  <v-list-item-title class="text-h5 mb-1">
                    Headline 5
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >Greyhound divisely hello coldly
                    fonwderfully</v-list-item-subtitle
                  >
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                ></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn outlined rounded text> Button </v-btn>
              </v-card-actions>
            </v-card></v-col
          >
        </v-row>
      </v-container>
    </div>
    <v-item-group>
      <v-container
        ><v-row justify="start" class="">
          <v-col
            cols="3"
            xs="2"
            sm="2"
            md="2"
            v-for="(c, i) in categories"
            :key="i"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                class="d-flex align-center justify-center rounded-lg"
                :class="active ? 'borderme' : 'borderout'"
                :color="active ? '#D5F0DB' : 'white'"
                height="120"
                flat
                @click="toggle"
              >
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-list-item three-line class="text-center">
                      <v-list-item-content>
                        <div align="center" justify="center">
                          <v-img
                            :src="c.img"
                            max-height="80"
                            max-width="80"
                            contain
                          ></v-img>
                        </div>
                      </v-list-item-content>
                      <v-list-item-subtitle
                        class="mt-4"
                        :class="active ? 'green--text' : 'black--text'"
                      >
                        {{ c.title }}
                      </v-list-item-subtitle>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-card></v-item
            ></v-col
          ></v-row
        >
      </v-container>
    </v-item-group>
    <v-container>
      <v-card class="mt-5 mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">OVERLINE</div>
            <v-list-item-title class="text-h5 mb-1">
              Headline 5
            </v-list-item-title>
            <v-list-item-subtitle
              >Greyhound divisely hello coldly
              fonwderfully</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn outlined rounded text> Button </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container>
      <v-card class="mt-5 mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">OVERLINE</div>
            <v-list-item-title class="text-h5 mb-1">
              Headline 5
            </v-list-item-title>
            <v-list-item-subtitle
              >Greyhound divisely hello coldly
              fonwderfully</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn outlined rounded text> Button </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    items: [
      {
        src: 'https://lh3.googleusercontent.com/QPLK6wYRdDrMQ_SqQr3WgmlRTgkqpwOH2ldIP78aCeSTMAFBO9sifWrY2Kyo00CiCzggvA8L_7Yj7mamZrqVCogQO2jhCc8Nhw=rw-w1920',
        title: 'We are creative'
      },
      {
        src: 'https://lh3.googleusercontent.com/KHQz30RvopyDUrRI95m_etcGBoknp9XMhoIxonPJvPkPuVattd0mxb8ugnXFhX4pBQJ6Tl0eeECAE5Iodey28UyNXNHOg6Lf=rw-w1920',
        title: 'We are hard worker'
      },
      {
        src: 'https://lh3.googleusercontent.com/FnKnm92DuuukTHRXw63Ycb9zciigDAlv69zINlV8YxykcwdeLlBuO2TOGrGnlaK1BpwemNrel4xchpNoax592mWs3DabAWc=rw-w1920',
        title: 'We are professional'
      }
    ],
    categories: [
      {
        img: 'https://lh3.googleusercontent.com/Vv4QFdO86gY1PuydiHxlYKbp1TylcipH5xKdPV5A3siNSH-s8-l6xFM4xZUkxqgr8n5i1UWY11WI-NhFjIZrvrcBfRfD3PI=rw',
        title: 'Meat & Fish'
      },
      {
        img: 'https://lh3.googleusercontent.com/Tbx6y7pI3TBXLszBKa_UDfPXNWKufgrNzmalmQKEHHJ_88UWAyWQeXHPIu34GlAT1uzvNbaj26M9BPDmotQHMVZRMQ2rw1heiA=rw',
        title: 'Vegetables'
      },
      { img: '3.png', title: 'Medicine' },
      { img: '3.png', title: 'Medicine' },
      { img: '3.png', title: 'Medicine' },
      { img: '3.png', title: 'Medicine' },
      { img: '3.png', title: 'Medicine' }
    ]
  })
}
</script>

<style lang="scss">
.v-main__wrap {
  background-color: #f5f5f5;
}
.v-card {
  border: none !important;
}
.heroBlock {
  position: relative;

  .v-window {
    @media only screen and (max-width: 820px) {
      height: 320px !important;
    }
    @media only screen and (max-width: 599px) {
      height: 180px !important;
    }
  }
  .v-image {
    height: inherit !important;
  }
  .v-image__image {
    &:before {
      content: '';
      // background: rgba(0, 0, 0, 0.3);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
  }
}
.padding-custom {
  padding: 0 !important;
}
</style>
