<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
  <form @submit="onSubmit" v-if="!isTooManyAttempts">
      <input type="text" v-model="name" />
      <p>{{ name }}</p><p>{{ errors.name }}</p>
      <input type="text" v-model="email" />
      <p>{{ email }}</p><p>{{ errors.email }}</p>
      <button type="submit" :disabled="isSubmitting">送信</button>
  </form>

<pre>

<strong>submitカウントの取得</strong>
ログインフォームを利用してログインする場合にログインの失敗する回数を保存しておき事前に決めた回数を超えると
ログインができなくなるといった実装を見かけることがあります。
Vee-Validateではsubmitの回数を保存することができるのでその回数を利用してフォームの制御を行うことができます。
useFormから戻されるオブジェクトの中にsubmitCountが含まれているのでそれを利用します。

submitCountとComputedプロパティを使って<strong>5回送信ボタンを押すとフォームを
v-ifディレクティブで非表示になるようにしています。</strong>
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
      &lt;button type="submit" :disabled="isSubmitting">送信&lt;/button&gt;
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

    const { errors, meta, handleSubmit, isSubmitting } = 
        useForm({
            validationSchema: schema,
            initialValues: {name: '田中真紀子',
                            email: 'makiko.t@a.com',},
        });

    const onSubmit = handleSubmit(async () => {
        const res = 
        await fetch('https://gvc.co.jp');
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
&lt;/script&gt;

</pre>
    </td>

    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ーー＞&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td>

<pre>


  &lt;form @submit="onSubmit" <strong> v-if="!isTooManyAttempts"</strong> &gt;
      &lt;input type="text" v-model="name" /&gt;
      &lt;p&gt;｛｛ name }}&lt;/p&gt;&lt;p&gt;｛｛errors.name }}&lt;/p&gt;
      &lt;input type="text" v-model="email" /&gt;
      &lt;p&gt;｛｛ email }}&lt;/p&gt;&lt;p&gt;｛｛ errors.email }}&lt;/p&gt;
      &lt;button type="submit" :disabled="isSubmitting">送信&lt;/button&gt;
  &lt;/form&gt;

&lt;script&gt;
<strong>import { computed } from 'vue';</strong>
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

    const { errors, meta, handleSubmit, isSubmitting<strong>, submitCount</strong> } = 
      useForm({
        validationSchema: schema,
        initialValues: {name: '田中真紀子',email: 'makiko.t@a.com',},
      });

    <strong>const onSubmit = handleSubmit((values) => {
      console.log(values);
      //入力した値をサーバに送信したりする処理
    });</strong>

    <strong>const isTooManyAttempts = computed(() => {
      return submitCount.value >= 5;
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
      isSubmitting,
      <strong>isTooManyAttempts,</strong>
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
import { computed } from 'vue';
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

    const { errors, meta, handleSubmit, isSubmitting, submitCount } = 
      useForm({
        validationSchema: schema,
        initialValues: {name: '田中真紀子',email: 'makiko.t@a.com',},
      });

    const onSubmit = handleSubmit((values) => {
      console.log(values);
      //入力した値をサーバに送信したりする処理
    });

    const isTooManyAttempts = computed(() => {
      return submitCount.value >= 5;
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
      isTooManyAttempts,
    };
  },
};
</script>