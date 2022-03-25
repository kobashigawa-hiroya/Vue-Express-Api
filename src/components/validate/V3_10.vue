<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
  name:<input type="text" v-model="name" />
  <p>{{ name }}</p><p>{{ errors.name }}</p>
  <!-- email:<input type="text" :value="email" @blur="handleChange" /> -->
  email:<input type="text" :value="email" @change="handleChange" />
  <!-- email:<input type="text" :value="email" @input="handleChange" /> -->
  <p>{{ email }}</p><p>{{ errors.email }}</p>

  <pre>


<strong>イベントの設定 handleChange</strong>
input要素に文字を入力するとすぐにバリデーションが行われます。
input要素からフォーカスが外れた時にバリデーションを実行することも可能です。
その場合はuseFiledが戻されるオブジェクトの中に入っているhandleChangeを利用します。

先程までのように文字を入力してもエラーメッセージは表示されません。

・input要素からフォーカスを外すと@blurイベントによってバリデーションが実行されます。
・@changeイベントに変更すると文字を入力した後にフォーカスを外した時に
&nbsp;&nbsp;イベントが発火されますが何も入力せずにフォーカスを外した場合はイベントは発火されません。
・＠inputイベントを設定した場合はv-modelを設定した時と同様に文字を入力した時点でバリデーションが実行されます。

<strong>handleChangeを利用してバリデーションを行うタイミングを変更することができます</strong>
</pre>

<table>
  <tr>
    <td>
<pre>

&lt;input type="text" v-model="name" /&gt;
&lt;p&gt;｛｛ name ｝｝&lt;/p&gt; &lt;p&gt;｛｛  errors.name ｝｝&lt;/p&gt;
&lt;input type="text" v-model="email" /&gt;
&lt;p&gt;｛｛ email ｝｝&lt;/p&gt; &lt;p&gt;｛｛ errors.email ｝｝&lt;/p&gt;
  
&lt;script&gt;
import { useField, useForm  } from 'vee-validate';
import * as yup from 'yup';
export default {
  setup() {
    const schema = yup.object({
      name: yup.string().
            required('名前は、必須の項目です。'). 
      email: yup.string().required('必須の項目です。').
            email('メールアドレスの形式ではありません。'),
    });
    const { errors } = useForm({
      validationSchema: schema,
    });

    const { value: name } = useField('name');
    const { value: email } = useField('email');

    return {
      name,
      email,
      errors,
    };
  },
};

&lt;/script&gt;

</pre>
    </td>

    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ーー＞&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td>

<pre>
  
  
&lt;input type="text" v-model="name" /&gt;
&lt;p&gt;｛｛ name ｝｝&lt;/p&gt; &lt;p&gt;｛｛  errors.name ｝｝&lt;/p&gt;
&lt;!--  &lt;<strong>input type="text" :value="email" @blur="handleChange"</strong> /&gt;--&gt;
&lt;input type="text" <strong>:value="email" @change="handleChange"</strong> /&gt;
&lt;!--&lt;<strong>input type="text" :value="email" @input="handleChange"</strong> /&gt;--&gt;
&lt;p&gt;｛｛ email ｝｝&lt;/p&gt; &lt;p&gt;｛｛ errors.email ｝｝&lt;/p&gt;
  
&lt;script&gt;
import { useField, useForm  } from 'vee-validate';
import * as yup from 'yup';
export default {
  setup() {
    const schema = yup.object({
      name: yup.string().
            required('名前は、必須の項目です。'). 
      email: yup.string().required('必須の項目です。').
            email('メールアドレスの形式ではありません。'),
    });
    const { errors } = useForm({
      validationSchema: schema,
    });

    const { value: name } = useField('name');
    const { value: email <strong>,handleChange</strong> } = useField('email');

    return {
      name,
      email,
      errors,
      <strong>handleChange,</strong>
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
import { useField, useForm  } from 'vee-validate';
import * as yup from 'yup';
export default {
  setup() {
    const schema = yup.object({
      name: yup.string().required('名前は、必須の項目です。'),
      email: yup.string().required('必須の項目です。').email('メールアドレスの形式ではありません。'),
    });
    const { errors } = useForm({
      validationSchema: schema,
    });

    const { value: name } = useField('name');
    const { value: email, handleChange } = useField('email');

    return {
      name,
      email,
      errors,
      handleChange,
    };
  },
};
</script>