<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
  <form @submit="onSubmit">
      <input type="text" v-model="name" />
      <p>{{ errors['form.name'] }}</p>
      <input type="text" v-model="email" />
      <p>{{ errors['form.email'] }}</p>
      <button type="submit">送信</button>
  </form>

<pre>

<strong>バリデーションスキーマ汎化</strong>

</pre>

<table>
  <tr>
    <td>
<pre>

  &lt;form @submit="onSubmit"&gt;
      &lt;input type="text" v-model="name" /&gt;
      &lt;p&gt;｛｛ name }}&lt;/p&gt;&lt;p&gt;｛｛ errors['form.name'] }}&lt;/p&gt;
      &lt;input type="text" v-model="email" /&gt;
      &lt;p&gt;｛｛ email }}&lt;/p&gt;&lt;p&gt;｛｛ errors['form.email'] }}&lt;/p&gt;
      &lt;button type="submit">送信&lt;/button&gt;
  &lt;/form&gt;

&lt;script&gt;
import { useField, useForm } from 'vee-validate';
import { object, string } from 'yup';
export default {
  setup() {
    const schema = object({
      form: object({
          name: string().required('名前は、必須の項目です。'),
          email: string()
            .required('必須の項目です。')
            .email('メールアドレスの形式ではありません。'),
      }),
    });

    const { errors, meta, handleSubmit } = useForm({
      validationSchema: schema,
      initialValues: {form:
              {name: '',email: '',},},
    });

    const onSubmit = handleSubmit((values,{ resetForm}) =>{
      console.log(values);
      //入力した値をサーバに送信したりする処理
      resetForm();
    });

    const { value: name } = useField('form.name'));
    const { value: email } = useField('form.email');

    return {
      name,
      email,
      errors,
      meta,
      handleSubmit,
      onSubmit,
    };
  },
};
&lt;/script&gt;

</pre>
    </td>

    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ーー＞&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td>

<pre>


</pre>

    </td>
    </tr>

</table>

</template>

<script>
import { useField, useForm } from 'vee-validate';
import { object, string } from 'yup';
export default {
  setup() {
    const schema = object({
      form: object({
          name: string().required('名前は、必須の項目です。'),
          email: string()
            .required('必須の項目です。')
            .email('メールアドレスの形式ではありません。'),
      }),
    });

    const { errors, meta, handleSubmit } = useForm({
      validationSchema: schema,
      initialValues: {form: {name: '',email: '',},},
    });

    const onSubmit = handleSubmit((values, { resetForm }) => {
      console.log(values);
      resetForm();
    });

    const { value: name } = useField('form.name');
    const { value: email } = useField('form.email');

    return {
      name,
      email,
      errors,
      meta,
      handleSubmit,
      onSubmit,
    };
  },
};
</script>