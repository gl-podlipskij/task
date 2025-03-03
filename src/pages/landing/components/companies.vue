<template>
        <div class="companies">
                    <span class="companies-title">
                        TRUSTED BY startups and large enterprises
                    </span>
        <div class="companies-list">
         <img class="company-img" src="../assets/companies/brand_1.png" alt=""/>
         <img class="company-img" src="../assets/companies/brand_2.png" alt=""/>
         <img class="company-img" src="../assets/companies/brand_3.png" alt=""/>
         <img class="company-img" src="../assets/companies/brand_4.png" alt=""/>
         <img class="company-img" src="../assets/companies/brand_5.png" alt=""/>
        </div>
    </div>
</template>
<style lang="scss">
.companies {
    display: flex;
    flex-direction: column;
    align-items: center;
    .companies-title {
        text-transform: uppercase;
        font-size: 14px;
    }
    .companies-list {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .company-img {
            width: 210px;
        }
    }
}
</style>