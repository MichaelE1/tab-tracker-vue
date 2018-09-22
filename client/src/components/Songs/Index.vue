<template>
  <v-layout>
    <v-flex xs6>
      <songs-bookmarks />
    </v-flex>
    <v-flex xs6 class="ml-2">
      <songs-search-panel />
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsBookmarks from './SongsBookmarks'
import SongsSearchPanel from './SongsSearchPanel'
import SongService from '@/services/SongService'
export default {
  data () {
    return {
      songs: null
    }
  },
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks
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
