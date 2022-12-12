<template>
  <div class="wrapper">
    <section class="info">
      <h2 class="title">CONTACTS</h2>
      <ul class="info__list">
        <li class="info__list-item">
          <span class="circle"><i class="pi pi-map-marker icon"></i></span>
          <p>Baku , Izzat Khamidov 3/11, Azerbaijan</p>
        </li>
        <li class="info__list-item">
          <span class="circle"><i class="pi pi-envelope icon"></i></span>
          <a class="email" href="mailto:sales@rkkgoldgroup.com"
            >sales@rkkgoldgroup.com</a
          >
        </li>
        <li class="info__list-item">
          <span class="circle"><i class="pi pi-wallet icon"></i></span>
          <div>
            <p><span>Tax ID:</span> 1406105331</p>
            <p><span>Bank:</span> TuranBank OJSC</p>
            <p><span>SWIFT:</span> TURAAZ22</p>
            <p><span>Acc.</span> USD AZ33TURA40160076343600100840</p>
          </div>
        </li>
      </ul>
    </section>
    <section class="form">
      <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
        <Toast />
        <p class="desc form__item">
          Feel free to reach out to us if you have any questions
        </p>
        <div class="form__item">
          <div class="field">
            <div class="p-float-label">
              <InputText
                class="input"
                id="name"
                v-model="v$.name.$model"
                :class="{ 'p-invalid': v$.name.$invalid && submitted }"
              />
              <label
                for="name"
                style="color: black"
                :class="{ 'p-error': v$.name.$invalid && submitted }"
                >Name*</label
              >
            </div>
            <small
              v-if="
                (v$.name.$invalid && submitted) || v$.name.$pending.$response
              "
              class="p-error"
              >{{ v$.name.required.$message.replace("Value", "Name") }}</small
            >
          </div>
          <div class="field">
            <div class="p-float-label">
              <InputText
                class="input"
                id="company"
                type="text"
                v-model="company"
              />
              <label for="company" style="color: black">Company</label>
            </div>
          </div>
        </div>
        <div class="form__item">
          <div class="field">
            <div class="p-float-label p-input-icon-right">
              <i class="pi pi-envelope" />
              <InputText
                id="email"
                class="input"
                v-model="v$.email.$model"
                :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                aria-describedby="email-error"
              />
              <label
                for="email"
                style="color: black"
                :class="{ 'p-error': v$.email.$invalid && submitted }"
                >Email*</label
              >
            </div>
            <span v-if="v$.email.$error && submitted">
              <span
                id="email-error"
                v-for="(error, index) of v$.email.$errors"
                :key="index"
              >
                <small class="p-error">{{ error.$message }}</small>
              </span>
            </span>
            <small
              v-else-if="
                (v$.email.$invalid && submitted) || v$.email.$pending.$response
              "
              class="p-error"
              >{{ v$.email.required.$message.replace("Value", "Email") }}</small
            >
          </div>

          <div class="field">
            <div class="p-float-label p-input-icon-right">
              <i class="pi pi-phone" />
              <InputMask
                mask="(999) 99-999-9999"
                class="input"
                id="phone"
                v-model="v$.phone.$model"
                :class="{ 'p-invalid': v$.phone.$invalid && submitted }"
              />
              <label
                for="phone"
                style="color: black"
                :class="{ 'p-error': v$.phone.$invalid && submitted }"
                >Phone*</label
              >
            </div>
            <small
              v-if="
                (v$.phone.$invalid && submitted) || v$.phone.$pending.$response
              "
              class="p-error"
              >{{ v$.phone.required.$message.replace("Value", "Phone") }}</small
            >
          </div>
        </div>

        <div class="p-float-label">
          <Dropdown
            id="options"
            class="form__item input"
            v-model="selectedOption"
            :options="options"
            optionLabel="name"
            optionValue="name"
          />
          <label for="options" style="color: black">Select an options</label>
        </div>

        <div class="p-float-label">
          <Textarea
            id="message"
            class="form__item input"
            placeholder="Enter your message"
            v-model="message"
            rows="3"
            cols="20"
            :autoResize="true"
          />
          <label for="message" style="color: black">Message</label>
        </div>

        <Button class="button form__item" type="submit" label="Send" />
        <p class="agreement">
          *By clicking the button, you agree to the user agreement and
          <router-link class="link" to="/privacy-policy"
            >Privacy Policy</router-link
          >
        </p>
      </form>
    </section>
  </div>
</template>

<script>
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";
import Toast from "primevue/toast";
import InputMask from "primevue/inputmask";

import SendMailAPI from "../../../api/SendMailAPI";

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      submitted: false,
      selectedOption: null,
      options: [
        { name: "Consumer electronics" },
        { name: "Alternative energy" },
        { name: "Health & Wellbeing products" },
        { name: "Industrial equipment" },
        { name: "Souvenir products" },
      ],
    };
  },
  components: {
    InputText,
    InputMask,
    Button,
    Textarea,
    Dropdown,
    Toast,
  },
  methods: {
    async sendMail() {
      if (this.name && this.phone && this.email) {
        SendMailAPI.send({
          name: this.name,
          company: this.company,
          email: this.email,
          phone: this.phone,
          message: this.message,
          selectedOption: this.selectedOption,
        })
          .then((res) => {
            console.log(res);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },

    handleSubmit(isFormValid) {
      this.submitted = true;

      if (!isFormValid) {
        return;
      }

      this.showSuccess();
      this.resetForm();
    },

    resetForm() {
      this.name = "";
      this.company = "";
      this.email = "";
      this.phone = "";
      this.message = "";
      this.submitted = false;
      this.selectedOption = null;
    },
    showSuccess() {
      this.$toast.add({
        severity: "success",
        summary: "Thank You!",
        detail: "Your application sent",
        life: 3000,
      });
      this.sendMail();
    },
  },
  validations() {
    return {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
      },
    };
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: space-between;

  min-height: calc(100vh - 80px);

  background-repeat: no-repeat;
  background-position-y: 30%;
  background-size: cover;
  background-image: linear-gradient(360deg, rgba(255, 255, 255, 1), transparent),
    url(../../assets/contacts_bg.jpg);

  .info {
    .title {
      text-align: center;
      font-size: 80px;
      font-weight: 700;
      color: #212121;
    }

    &__list {
      margin: 30px 0;

      &-item {
        display: flex;
        align-items: center;

        margin-bottom: 20px;

        .circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          width: 50px;
          height: 50px;

          border-radius: 25px;
          background-color: var(--primary-color);

          .icon {
            font-size: 1.5rem;
            color: #fff;
          }
        }

        .email {
          margin-left: 20px;

          color: black;
          font-weight: 400;
        }

        p {
          margin-left: 20px;

          font-weight: 400;

          span {
            line-height: 1.3em;
            font-weight: 500;
            font-size: 1.1em;
          }
        }
      }
    }
  }

  .form {
    margin-left: 20px;
    width: 50%;
    max-width: 500px;

    .desc {
      font-size: 40px;
      font-weight: 500;
    }

    &__item {
      display: flex;
      justify-content: space-between;

      margin-bottom: 35px;
      .field {
        width: 48%;
        max-width: 500px;
        min-width: 100px;
      }
    }

    .button {
      margin-bottom: 15px;

      border-radius: 10px;

      font-weight: 700;
    }
    .input {
      border-radius: 10px;
    }

    .agreement {
      text-align: center;

      font-size: 12px;

      .link {
        text-decoration: underline;
        font-size: 1.1em;
        color: var(--primary-color);

        cursor: pointer;
      }
    }
  }
}

@media screen and (min-width: 1920px) {
  .wrapper {
    justify-content: flex-start;

    .form {
      margin-left: 120px;
    }
  }
}

@media screen and (max-width: 992px) {
  .wrapper {
    display: block;

    .form {
      margin-left: 0;
      margin: 50px auto 0 auto;
      width: 100%;
      max-width: 5900px;
    }
  }
}

@media screen and (max-width: 768px) {
  .wrapper {
    .info {
      .title {
        font-size: 68px;
      }
    }
    .form {
      .desc {
        font-size: 20px;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .wrapper {
    .info {
      .title {
        font-size: 60px;
      }

      .info__list-item {
        .circle {
          width: 30px;
          height: 30px;
          border-radius: 15px;

          .icon {
            font-size: 1rem;
          }
        }
        p {
          font-size: 12px;
        }
      }
    }
    .form {
      .desc {
        font-size: 18px;
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .wrapper {
    .info {
      .title {
        font-size: 48px;
      }
    }
  }
}
</style>
