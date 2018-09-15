<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn :to="{name: 'songs-create'}" fab slot="action" class="cyan accent-2" light medium absolute right middle>
          <v-icon>add</v-icon>
        </v-btn>
        <div v-for="song in songs" class="song" :key="song.id">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-genre">
                {{song.genre}}
              </div>

              <v-btn class="cyan" dark :to="{name: 'song', params: {songId: song.id}}">View</v-btn>
            </v-flex>

            <v-flex xs6>
              <img class="album-image" :src="song.albumImage" />
            </v-flex>

          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongService from '@/services/SongService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      songs: null
    }
  },
  components: {
    Panel
  },
  async mounted () {
    // do a request to backend for all the songs
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
