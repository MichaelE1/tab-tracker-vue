<template>
  <v-layout>
    <v-flex xs6 v-if="isUserLoggedIn">
      <songs-bookmarks />
      <recently-viewed-songs class="mt-2" />
    </v-flex>

    <v-flex :class="{
      xs12: !isUserLoggedIn,
      x6: isUserLoggedIn}"
      class="ml-2">
      <songs-search-panel />
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import {mapState} from 'vuex'

import SongsPanel from './SongsPanel'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongsSearchPanel from './SongsSearchPanel'
import SongService from '@/services/SongService'
export default {
  data () {
    return {
      songs: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  async mounted () {
    this.songs = (await SongService.index()).data
  }
}
</script>

<style scoped>
  .song {
    padding: 20px;
    height: 300px;
    overflow: hidden;
  }
  .song-title {
    font-size: 30px;
  }

  .song-artist {
    font-size: 24px
  }

  .song-genre {
    font-size: 18px
  }

  .album-image {
    width: 70%;
    margin: 0 auto;
  }
</style>
