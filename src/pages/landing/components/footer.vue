<script setup lang="ts">
import Logo from './lib/logo.vue';

</script>
<template>
    <footer>
        <div class="footer-content">
          <div class="info">
            <Logo/>
            <span class="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos nihil dolores quas autem. Aliquid, sint officiis. Itaque, expedita unde aliquid excepturi in consectetur ex? Laboriosam laborum reiciendis dicta obcaecati?
                    </span>
            <div class="socials">

            </div>
          </div>
          <div class="link-column">
                    <span class="link-title title">
                        Pages
                    </span>
            <div class="link-list">
              <span class="link-text">Home</span>
              <span class="link-text">About</span>
              <span class="link-text">Services</span>
              <span class="link-text">Packages</span>
              <span class="link-text">Blog</span>
              <span class="link-text">Contact</span>
            </div>
          </div>
          <div class="link-column">
                    <span class="link-title title">
                        Utility Pages
                    </span>
            <div class="link-list">
              <span class="link-text">Instructions</span>
              <span class="link-text">Style guide</span>
              <span class="link-text">Licenses</span>
              <span class="link-text">Changelog</span>
              <span class="link-text">404 Not found</span>
              <span class="link-text">Password protected</span>
            </div>
          </div>
          <div class="subscribe-form">
            <span class="title">Subscribe to our newsletter</span>
            <span class="description">Lorem ipsum dolor sit am consectetur adipiscing</span>
            <div class="input-container">
              <input class="input" placeholder="Enter your email"/>
              <button class="button">Subscribe</button>
            </div>
          </div>
        </div>
        <hr/>
        <span class="year">
                    ©2022
                </span>
    </footer>
</template>
<style scoped lang="scss">
footer {
    display: flex;
    flex-direction: column;
    .footer-content {
        display: flex;
        gap : 64px;
        .info {
            display: flex;
            flex-direction: column;
            gap : 32px;
            width: 320px;
        }
        .link-column {
            display: flex;
            flex-direction: column;
            gap : 32px;
            .link-text {
                color : var(--gray);
            }
            .link-list {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
        }   
        .subscribe-form{ 
            display: flex;
            flex-direction: column;
            gap : 32px;
            .input-container {
                display: flex;
                width: 100%;
                gap : 16px;
            }
        }
    }
    hr {
        margin-top: 180px;
        width: 100%;
        height: 1px;
        background-color: var(--grey);
    }
    .year {
        align-self: center;
        color : var(--gray);
        margin: 43px;
    }
}
</style>