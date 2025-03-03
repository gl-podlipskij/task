<script setup lang="ts">
import Logo from './lib/logo.vue';

</script>
<template>
      <nav>
        <div class="left">
            <Logo/>
        </div>
        <div class="right">
          <div class="nav-item-list">
            <div class="nav-item">
                <span>
                  Home
                </span>
            </div>
            <div class="nav-item">
                <span>
                    About
                </span>
            </div>
            <div class="nav-item">
                <span>
                    Pages
                </span>
            </div>
            <div class="nav-item">
                <span>
                  Services
                </span>
            </div>
            <div class="nav-item">
                <span>
                    Cart
                </span>
              <div class="cart-counter">
                <span class="count">0</span>
              </div>
            </div>
          </div>
          <button class="button">Get Started</button>
        </div>
      </nav>
</template>
<style scoped lang="scss">
nav {
    margin-top: 32px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .left, .right{
        display: flex;
    }
    .right {
        gap : 32px;
    }
    .nav-item-list {
        display: flex;
        gap: 32px;
        .nav-item {
            display: flex;
            gap : 5px;
            align-items: center;
            .cart-counter{ 
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--grey);
                border-radius: 50%;
                .count {
                    font-size: 14px;
                    line-height: 14px;
                }
            }
        }
    }
}
</style>