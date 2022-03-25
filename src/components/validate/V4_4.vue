<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
  <form @submit="onSubmit">
      <input type="text" v-model="name" />
      <p>{{ name }}</p><p>{{ errors.name }}</p>
      <input type="text" v-model="email" />
      <p>{{ email }}</p><p>{{ errors.email }}</p>
      <button type="submit">送信</button>
  </form>

<pre>

<strong>入力した値をリセット</strong>
handleSubmitで入力した値をサーバに送信後フォームの値をリセットしたい場合があります。
その場合のresetForm関数も準備されています。
バリデーションにパスする値を入力して送信ボタンをクリックするとフォームに入力した値がリセットされます。
</pre>

<table>
  <tr>
    <td>
<pre>

  &lt;form @submit="onSubmit"&gt;
      &lt;input type="text" v-model="name" /&gt;
      &lt;p&gt;｛｛ name }}&lt;/p&gt;&lt;p&gt;｛｛errors.name }}&lt;/p&gt;
      &lt;input type="text" v-model="email" /&gt;
      &lt;p&gt;｛｛ email }}&lt;/p&gt;&lt;p&gt;｛｛ errors.email }}&lt;/p&gt;
      &lt;button type="submit">送信&lt;/button&gt;
  &lt;/form&gt;

&lt;script&gt;
import { useField, useForm } from 'vee-validate';
import { object, string } from 'yup';
export default {
  setup() {
    const schema = object({
      name: string().required('名前は、必須の項目です。'),
      email: string()
        .required('必須の項目です。')
        .email('メールアドレスの形式ではありません。'),
    });

    const { errors, meta, handleSubmit } = useForm({
      validationSchema: schema,
      initialValues: {name: '',email: '',},
    });

    const onSubmit = handleSubmit((values) => {
      console.log(values);
      //入力した値をサーバに送信したりする処理
    });

    const { value: name } = useField('name');
    const { value: email } = useField('email');

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
  &lt;form @submit="onSubmit"&gt;
      &lt;input type="text" v-model="name" /&gt;
      &lt;p&gt;｛｛ name }}&lt;/p&gt;&lt;p&gt;｛｛errors.name }}&lt;/p&gt;
      &lt;input type="text" v-model="email" /&gt;
      &lt;p&gt;｛｛ email }}&lt;/p&gt;&lt;p&gt;｛｛ errors.email }}&lt;/p&gt;
      &lt;button type="submit">送信&lt;/button&gt;
  &lt;/form&gt;

&lt;script&gt;
import { useField, useForm } from 'vee-validate';
import { object, string } from 'yup';
export default {
  setup() {
    const schema = object({
      name: string().required('名前は、必須の項目です。'),
      email: string()
        .required('必須の項目です。')
        .email('メールアドレスの形式ではありません。'),
    });

    const { errors, meta, handleSubmit } = useForm({
      validationSchema: schema,
      initialValues: {name: '',email: '',},
    });

    const onSubmit = handleSubmit((values<strong>, { resetForm }</strong>) => {
      console.log(values);
      //入力した値をサーバに送信したりする処理
      <strong>resetForm();</strong>
    });

    const { value: name } = useField('name');
    const { value: email } = useField('email');

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
    </tr>

</table>

</template>

<script>
import { useField, useForm } from 'vee-validate';
import { object, string } from 'yup';
export default {
  setup() {
    const schema = object({
      name: string().required('名前は、必須の項目です。'),
      email: string()
        .required('必須の項目です。')
        .email('メールアドレスの形式ではありません。'),
    });

    const { errors, meta, handleSubmit } = useForm({
      validationSchema: schema,
      initialValues: {name: '',email: '',},
    });

    const onSubmit = handleSubmit((values, { resetForm }) => {
      console.log(values);
      resetForm();
    });

    const { value: name } = useField('name');
    const { value: email } = useField('email');

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