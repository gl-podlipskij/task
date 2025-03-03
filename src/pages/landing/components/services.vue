<template>
      <div class="services">
          <div class="left">
            <span class="service-text">
                Services
            </span>
            <span class="title-2">Services we offer</span>
            <span class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</span>
            <button class="button">All Services</button>
          </div>
          <div class="right">
            <div class="first services-column">
              <div class="card">
                <img src="../assets/services/service1.png" class="service-icon" alt=""/>
                <span class="service-name">
                                    Social Media Marketing
                                </span>
                <span class="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.
                  </span>
              </div>
              <div class="card">
                <img src="../assets/services/service2.png" class="service-icon" alt=""/>
                <span class="service-name">
                                    Email Marketing
                                </span>
                <span class="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.
                  </span>
              </div>
            </div>
            <div class="services-column">
              <div class="card">
                <img src="../assets/services/service3.png" class="service-icon" alt=""/>
                <span class="service-name">
                                    Paid Advertising
                                </span>
                <span class="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.
                  </span>
              </div>
              <div class="card">
                <img src="../assets/services/service4.png" class="service-icon" alt=""/>
                <span class="service-name">
                                    SEO Optimization
                                </span>
                <span class="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.
                  </span>
              </div>
            </div>
          </div>
        </div>
</template>
<style scoped lang="scss">
.services {
    display: flex;
    flex: 1 1;
    gap : 105px;
    .left {
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;

        .service-text {
            padding : 8px 16px;
            border-width: 1px;
            border-radius: 12px;
            border-color: var(--grey);
            color : var(--gray);
            text-transform: uppercase;
            
        }
        .service-title {
            font-size: 51.2px;
            font-weight: 500;
        }
    }
    .right {
        display: flex;
        flex-direction: row;
        gap : 32px;
        .services-column {
            display: flex;
            flex-direction: column;
            gap : 32px;
            .card {
                .service-icon {
                    width: 75px;
                    height: 75px;
                }
                .service-name {
                    font-size: 19px;
                }
                .description {
                    font-weight: 300;
                }
            }
        }
        .first {
            margin-top: 32px;
        }
    }
}
</style>