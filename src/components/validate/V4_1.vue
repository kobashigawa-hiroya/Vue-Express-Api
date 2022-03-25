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

<strong>フォームの処理 入力したデータを取得</strong>
最初に入力した値をVueのコード内で取得する方法を確認します。
formタグを追加しsubmitイベントを設定します。
送信ボタンをクリックするとonSubmit関数が実行できるように設定を行います。

<strong>onSubmitイベントが実行されるのは、バリデーションが通過したときのみ</strong>
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

    const { errors, meta } = useForm({
      validationSchema: schema,
      initialValues: {name: '',email: '',},
    });




    const { value: name } = useField('name');
    const { value: email } = useField('email');

    return {
      name,
      email,
      errors,
      meta,
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

    const { errors, meta<strong>, handleSubmit</strong> } = useForm({
      validationSchema: schema,
      initialValues: {name: '',email: '',},
    });

    <strong>const onSubmit = handleSubmit((values) => {
      console.log(values);
    });</strong>

    const { value: name } = useField('name');
    const { value: email } = useField('email');

    return {
      name,
      email,
      errors,
      meta,
      <strong>handleSubmit,
      onSubmit,</strong>
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
</script>