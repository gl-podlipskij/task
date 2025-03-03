<template>
    <div class="advantages">
          <div class="left">
            <div class="advantages-list">
              <div class="card">
                                <span class="title">
                                    1.2M+
                                </span>
                <span class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.
                                </span>
              </div>
              <div class="card">
                                <span class="title">
                                    3.4B
                                </span>
                <span class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.
                                </span>
              </div>
              <div class="card">
                                <span class="title">
                                    98%
                                </span>
                <span class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.
                                </span>
              </div>
              <div class="card">
                                <span class="title">
                                    10+
                                </span>
                <span class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.
                                </span>
              </div>
            </div>
          </div>
          <div class="right">
            <img class="advantages-img" src="../assets/adventages/person.png" alt=""/>
          </div>
        </div>
</template>
<style lang="scss">
.advantages {
    display: flex;
    gap : 32px;
    .left {
        .advantages-list {
            display: grid;
            gap : 32px;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
        }
    }
    .right {
        .advantages-img{
            width: 500px;
            
        }
    }
    
}
</style>