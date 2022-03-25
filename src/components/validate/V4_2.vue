<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
  <form @submit="onSubmit">
      <input type="text" v-model="name" />
      <p>{{ name }}</p><p>{{ errors.name }}</p>
      <input type="text" v-model="email" />
      <p>{{ email }}</p><p>{{ errors.email }}</p>
      <button type="submit" :disabled="isSubmitting">送信</button>
  </form>

<pre>

<strong>handleSubmitの進捗の確認</strong>
handleSubmit関数の中では入力したデータをバックエンドサーバに送信する等の処理を行います。
<strong>処理中に何度も送信ボタンを押させないために処理の進捗を確認することで制御することができます。</strong>
useFormから戻されるオブジェクトに含まれるisSubmittingを利用します。
isSubmittingはデフォルトではfalseで
handleSubmit関数が処理中はtrueになり、処理が完了するとfalseになります。
この値をbuttonのdisabled属性で利用します
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

    const { errors, meta, handleSubmit } = 
      useForm({
        validationSchema: schema,
        initialValues: {name: '',email: '',},
      });

    const onSubmit = handleSubmit((values) => {
      console.log(values);
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

    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ー＞&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td>

<pre>

  &lt;form @submit="onSubmit"&gt;
      &lt;input type="text" v-model="name" /&gt;
      &lt;p&gt;｛｛ name }}&lt;/p&gt;&lt;p&gt;｛｛errors.name }}&lt;/p&gt;
      &lt;input type="text" v-model="email" /&gt;
      &lt;p&gt;｛｛ email }}&lt;/p&gt;&lt;p&gt;｛｛ errors.email }}&lt;/p&gt;
      &lt;button type="submit" <strong>:disabled="isSubmitting"</strong>>送信&lt;/button&gt;
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

    const { errors, meta, handleSubmit<strong>, isSubmitting</strong> } = 
        useForm({
            validationSchema: schema,
            initialValues: {name: '田中真紀子',
                            email: 'makiko.t@a.com',},
        });

    const onSubmit = handleSubmit(<strong>async () => {
        const res = 
        await fetch('https://jsonplaceholder.typicode.com/todos/');
        const data = await res.json();
        console.log(data);
    });</strong>

    const { value: name } = useField('name');
    const { value: email } = useField('email');

    return {
      name,
      email,
      errors,
      meta,
      handleSubmit,
      onSubmit,
      <strong>isSubmitting,</strong>
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

    const { errors, meta, handleSubmit, isSubmitting } = useForm({
      validationSchema: schema,
      initialValues: {name: '田中真紀子',email: 'makiko.t@a.com',},
    });

    const onSubmit = handleSubmit(async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const data = await res.json();
        console.log(data);
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
      isSubmitting,
    };
  },
};
</script>