<template>
  <v-container>
    <photo-form />
    <v-row>
      <photo
        :photo="photo"
        :key="photo.id"
        v-for="photo in $store.getters.getAllPhotos"
      />
    </v-row>
    <PhotoDialog />
  </v-container>
</template>

<script>
import Photo from "@/components/photos/Photo";
import PhotoForm from "@/components/photos/PhotoForm";
import PhotoDialog from "@/components/photos/PhotoDialog";
export default {
  components: { PhotoDialog, PhotoForm, Photo },
  data: () => ({
    photos: [],
  }),
};
</script>

<style scoped></style>
