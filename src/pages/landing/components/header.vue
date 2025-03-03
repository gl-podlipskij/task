<template>
    <div class="header">
          <div class="info">
                        <span class="title-2">
                            Marketing solutions that grow your business.
                        </span>
            <span class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.
                        </span>
            <div class="options">
              <button class="button">Our services</button>
              <button class="button dark-button">Contact us</button>
            </div>
          </div>
          <div class="images">
            <div class="image-column">
              <img src="../assets/header/img1.png" alt=""/>
              <img src="../assets/header/img3.png" alt=""/>

            </div>
            <div class="image-column">
              <img src="../assets/header/img2.png" alt=""/>
              <img src="../assets/header/img4.png" alt=""/>
            </div>
          </div>
    </div>
</template>
<style scoped lang="scss">
.header {
    display: flex;
    gap: 32px;
    flex: 1 1;
    .info {
        align-self: center;
        display: flex;
        flex-direction: column;
        gap: 32px;
        .main-text {
            font-size: 51px;
            line-height: 61.4px;
            overflow-wrap: break-word;
        }
        .options {
            display: flex;
            gap : 32px;
        }
    }
    .images {
        display: flex;
        gap : 60px;
        padding: 32px;
        .image-column {
            display: flex;
            flex-direction: column;
            gap : 32px;
            img {
                width: 241px;
            }
        }
    }
}
</style>