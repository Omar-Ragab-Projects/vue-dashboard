<template>
  <div class="dashboard">
    <div class="insight-cards">
      <InsightCard
        v-for="insightCard in insightCards"
        :cardColor="insightCard.cardColor"
        :cardIcon="insightCard.cardIcon"
        :cardTitle="insightCard.cardTitle"
        :cardInsights="insightCard.cardInsights"
        :cardPercentage="insightCard.cardPercentage"
        :class="insightCard.class"
        :cardDate="insightCard.cardDate"
      />
    </div>
    <div class="live-insight-cards">
      <LiveInsightCards
        v-for="liveCard in LiveCards"
        :liveChart="liveCard.liveChart"
        :liveTitle="liveCard.liveTitle"
        :livePercentage="liveCard.livePercentage"
        :liveStatus="liveCard.liveStatus"
        :liveDate="liveCard.liveDate"
      />
    </div>
    <div class="projects-orders">
      <ProjectsAndOrders />
    </div>
  </div>
</template>

<script setup>
import InsightCard from "@/components/dashboard/InsightCard.vue";
import LiveInsightCards from "@/components/dashboard/LiveInsightCards.vue";
import ProjectsAndOrders from "@/components/dashboard/ProjectsAndOrders.vue";
import { insightCards } from "@/objects/dashboardInsightCards";
import { LiveCards } from "@/objects/dashboardLiveCards";
</script>

<style scoped lang="scss">
.dashboard {
  .insight-cards {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  .live-insight-cards {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
}
</style>
