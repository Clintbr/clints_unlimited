<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" class="mx-auto">
        <v-card class="pa-6">
          <h2 class="text-h4 text-center mb-6">Kontaktieren Sie mich</h2>
          <v-form>
            <v-text-field label="Name" variant="outlined" class="mb-4" />
            <v-text-field label="E-Mail" variant="outlined" class="mb-4" />
            <v-textarea label="Nachricht" variant="outlined" rows="4" class="mb-4" />
            <v-btn color="accent" size="large" block>Nachricht senden</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>