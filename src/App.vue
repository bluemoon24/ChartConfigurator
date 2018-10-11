<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
    <v-list>
      <v-list-tile
        router
        :to="item.to"
        value="true"
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>roi-charts demo (vsn {{ rcvsn }})</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import roiCharts from 'roi-charts'
export default {
  name: 'App',
  data: () =>({
    drawer: null,
    rcvsn: roiCharts.version,
    items: [
      {
        icon: 'home',
        title: 'Home',
        to: '/'
      },
      {
        icon: 'insert_chart',
        title: 'Chart',
        to: 'chart'
      },
      {
        icon: 'cloud_download',
        title: 'Data',
        to: 'data'
      }
    ]

  })
}

</script>
