<template>
<div class="scaling-form">
    <div class="scaling-content">
      <div class="left">
        <span class="title">
          Ready to start scaling your business now?
        </span>
        <span class="description">
          Lorem ipsum dolor sit am consectetur adipiscing varius enim in eros.
        </span>
      </div>
      <div class="right">
        <button class="button">
          Our Services
        </button>
        <button class="button dark-button">
          Contact us
        </button>
      </div>
    </div>

</div>
</template>
<style lang="scss">
.scaling-form {
    width: 100%;
    padding: 50px 0;
    background-color: var(--grey-dark-1);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .scaling-content {
        display: flex;
        gap : 256px;
        align-content: center;
        .left {
            display: flex;
            flex-direction: column;
            text-align: center;
            gap : 16px;
            
        }
        .right {
            align-items: center;
            display: flex;
            gap : 32px;
        }
    }
}
</style>