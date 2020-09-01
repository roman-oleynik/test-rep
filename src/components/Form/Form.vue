<template>
  <div class="home">
    <form class="form" @submit="onSubmit">
      <fieldset class="form__essential-info">
        <legend>Основная информация</legend>
        <ul class="form__grid form__grid_essential-info">
          <li class="form__surname">
            <label class="form__field">
              <span>Фамилия<span class="red">*</span>:</span>
              <input
                type="text"
                v-model.trim="$v.form.surname.$model"
                :class="{'error-input': $v.form.surname.$error}"
              >
            </label>
            <p
              v-if="$v.form.surname.$error"
              class="error-text"
            >
              Это поле должно быть заполнено!
            </p>
          </li>
          <li class="form__name">
            <label class="form__field">
              <span>Имя<span class="red">*</span>:</span>
              <input
                type="text"
                v-model.trim="$v.form.name.$model"
                :class="{'error-input': $v.form.name.$error}"
              >
            </label>
            <p
              v-if="$v.form.name.$error"
              class="error-text"
            >
              Это поле должно быть заполнено!
            </p>
          </li>
          <li class="form__patronym">
            <label class="form__field">
              Отчество:
              <input
                type="text"
                v-model.trim="form.patronym"
              >
            </label>
          </li>
          <li class="form__dateOfBirth">
            <label class="form__field">
              <span>Дата рождения<span class="red">*</span>:</span>
              <input
                type="date"
                v-model.trim="$v.form.dateOfBirth.$model"
                :class="{'error-input': $v.form.dateOfBirth.$error}"
              >
            </label>
            <p
              v-if="$v.form.dateOfBirth.$error"
              class="error-text"
            >
              Это поле должно быть заполнено!
            </p>
          </li>
          <li class="form__phoneNumber">
            <label class="form__field">
              <span>Номер телефона<span class="red">*</span>:</span>
              <input
                type="tel"
                v-model.trim="$v.form.phoneNumber.$model"
                :class="{'error-input': $v.form.phoneNumber.$error}"
                placeholder="+7..."
              >
            </label>
            <p
              v-if="$v.form.phoneNumber.$error"
              class="error-text"
            >
              Номер телефона должен начинаться на +7 и иметь 11 цифр.
            </p>
          </li>
          <li class="form__sex">
            <label class="form__field">
              Пол:
              <select
                v-model="form.sex"
              >
                <option value="1">Мужской</option>
                <option value="2">Женский</option>
                <option value="3">И тот, и другой</option>
              </select>
            </label>
          </li>
          <li class="form__clientsGroup">
            <label class="form__field">
              <span>Группа клиентов<span class="red">*</span>:</span>
              <select
                multiple
                size="2"
                :class="{'error-input': $v.form.clientsGroup.$error}"
                v-model="$v.form.clientsGroup.$model"
              >
                <option value="1">VIP</option>
                <option value="2">Проблемные</option>
                <option value="3">ОМС</option>
              </select>
            </label>
            <p
              v-if="$v.form.clientsGroup.$error"
              class="error-text"
            >
              Нужно выбрать одну или более группу клиентов.
            </p>
          </li>
          <li class="form__doctor">
            <label class="form__field">
              Лечащий врач:
              <select
                v-model="form.doctor"
              >
                <option value="1">Иванов</option>
                <option value="2">Захаров (гомофоб)</option>
                <option value="3">Чернышева</option>
              </select>
            </label>
            <p
              class="warning-text"
              v-if="form.sex === '3' && form.doctor === '2'"
            >
              Вы уверены?
            </p>
          </li>
          <li class="form__field form__isPreventedToSendSMS">
            <input
              type="checkbox"
              id="isPreventedToSendSMS"
              v-model="form.isPreventedToSendSMS"
            >
            <label for="isPreventedToSendSMS">Не отправлять СМС.</label>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Адрес</legend>
        <ul class="form__grid form__grid_address">
          <li class="form__field_postalIndex">
            <label class="form__field">
              Почтовый индекс:
              <input
                type="number"
                v-model="$v.form.postalIndex.$model"
              >
            </label>
            <p
              class="warning-text"
              v-if="$v.form.postalIndex.$error"
            >
              Почтовый индекс должен состоять из 6 цифр.
            </p>
          </li>
          <li class="form__field_country">
            <label class="form__field">
              Страна:
              <select
                v-model="form.country"
              >
                <option value="1">Беларусь</option>
                <option value="2">Россия</option>
              </select>
            </label>
          </li>
          <li class="form__field_region">
            <label class="form__field">
              Область:
              <input
                type="text"
                v-model.trim="form.region"
              >
            </label>
          </li>
          <li class="form__field_city">
            <label class="form__field">
              <span>Город<span class="red">*</span>:</span>
              <input
                type="text"
                placeholder="С большой буквы"
                :class="{'error-input': $v.form.city.$error}"
                v-model.trim="$v.form.city.$model"
              >
            </label>
            <p
              v-if="!$v.form.city.cityTemplate"
              class="error-text"
            >
              Название города должно начинаться с большой буквы
            </p>
            <p
              v-if="$v.form.city.$error && $v.form.city.cityTemplate"
              class="error-text"
            >
              Название города нужно ввести обязательно
            </p>
          </li>
          <li class="form__field_street">
            <label class="form__field">
              Улица:
              <input
                type="text"
                v-model.trim="form.street"
              >
            </label>
          </li>
          <li class="form__field_house">
            <label class="form__field">
              Дом:
              <input
                type="number"
                v-model.trim="form.house"
              >
            </label>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Идентификация личности</legend>
        <ul class="form__grid form__grid_passport-data">
          <li class="form__field_documentType">
            <label class="form__field">
              <span>Тип документа<span class="red">*</span>:</span>
              <select
                v-model="$v.form.documentType.$model"
                :class="{'error-input': $v.form.documentType.$error}"
              >
                <option value="1">Паспорт</option>
                <option value="2">Свидетельство о рождении</option>
                <option value="3">Вод. удостоверение</option>
              </select>
              <p
                v-if="$v.form.documentType.$error"
                class="error-text"
              >
                Нужно выбрать один из указанных документов
              </p>
            </label>
          </li>
          <li class="form__field_seriesOfPassport">
            <label class="form__field">
              Серия паспорта:
              <input
                type="text"
                v-model.trim="form.seriesOfPassport"
              >
            </label>
            <p
              class="warning-text"
              v-if="isPassportSeriesValidFor('1', /^[А-Я]{2}$/)"
            >
              Серия прописана неверно для страны Вашего проживания (Беларусь)
            </p>
            <p
              class="warning-text"
              v-if="isPassportSeriesValidFor('2', /^\d{4}$/)"
            >
              Серия прописана неверно для страны Вашего проживания (Россия)
            </p>
          </li>
          <li class="form__field_numberOfPassport">
            <label class="form__field">
              Номер паспорта:
              <input
                type="number"
                v-model="form.numberOfPassport"
              >
            </label>
            <p
              class="warning-text"
              v-if="isNumberOfPassportValid('1', /^\d{6}$/)"
            >
              Номер паспорта прописан неверно для страны Вашего проживания (Беларусь)
            </p>
            <p
              class="warning-text"
              v-if="isNumberOfPassportValid('2', /^\d{6}$/)"
            >
              Номер паспорта прописан неверно для страны Вашего проживания (Россия)
            </p>
          </li>
          <li class="form__field_authority">
            <label class="form__field">
              Орган, выдавший паспорт:
              <input
                type="text"
                v-model="form.authority"
              >
            </label>
          </li>
          <li class="form__field_dateOfIssue">
            <label class="form__field">
              <span>Дата выдачи документа<span class="red">*</span>:</span>
              <input
                type="date"
                v-model="$v.form.dateOfIssue.$model"
                :class="{'error-input': $v.form.dateOfIssue.$error}"
              >
            </label>
            <p
              v-if="$v.form.dateOfIssue.$error"
              class="error-text"
            >
              Дату выдачи документа нужно внести обязательно
            </p>
          </li>
        </ul>
      </fieldset>
      <p
        v-if="isFormValidOnSubmit === true"
        class="success-text align-center"
      >
        Уважаемый {{form.name}},
        форма отправлена успешно!
      </p>
      <p
        v-if="isFormValidOnSubmit === false"
        class="error-text_large align-center"
      >
        Заполните все поля!
      </p>
      <input
        type="submit"
        value="Отправить"
        class="form__submit"
      >
    </form>
  </div>
</template>

<script>
import { required, helpers } from 'vuelidate/lib/validators';
import './style.scss';

const phoneNumberTemplate = helpers.regex('rusPhoneNumber', /^\+7[\d]{10}$/);
const cityTemplate = helpers.regex('city', /^[А-ЯA-Z]{1}/);
const postalIndexTemplate = helpers.regex('postalIndex', /^\d{6}$/);

export default {
  name: 'Home',
  data() {
    return {
      form: {
        surname: '',
        name: '',
        patronym: '',
        dateOfBirth: null,
        phoneNumber: '',
        sex: '',
        clientsGroup: [],
        doctor: '',
        isPreventedToSendSMS: false,
        postalIndex: '',
        country: '',
        region: '',
        city: '',
        street: '',
        house: '',
        documentType: '',
        seriesOfPassport: '',
        numberOfPassport: '',
        authority: '',
        dateOfIssue: '',
      },
      isFormValidOnSubmit: null,
    };
  },
  validations: {
    form: {
      surname: {
        required,
      },
      name: {
        required,
      },
      dateOfBirth: {
        required,
      },
      phoneNumber: {
        required,
        phoneNumberTemplate,
      },
      clientsGroup: {
        required,
      },
      postalIndex: {
        postalIndexTemplate,
      },
      city: {
        required,
        cityTemplate,
      },
      documentType: {
        required,
      },
      dateOfIssue: {
        required,
      },
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      if (this.$v.$invalid) {
        this.isFormValidOnSubmit = false;
      } else {
        this.isFormValidOnSubmit = true;
      }
    },
    isPassportSeriesValidFor(codeOfCountry, template) {
      const { form } = this;
      if (
        form.documentType === '1'
        && form.country === codeOfCountry
        && form.seriesOfPassport !== ''
        && !form.seriesOfPassport.match(template)
      ) {
        return true;
      }
      return false;
    },
    isNumberOfPassportValid(codeOfCountry, template) {
      const { form } = this;
      if (
        form.documentType === '1'
        && form.country === codeOfCountry
        && form.numberOfPassport !== ''
        && !form.numberOfPassport.match(template)
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>
