<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
  name:<input type="text" v-model="name" />
  <p>{{ name }}</p><p>{{ errors.name }}</p>
  email:<input type="text" v-model="email" @input="handleBlur" />
  <p>{{ email }}</p><p>{{ errors.email }}</p>
  <p>valid:{{ meta.valid }}</p>
  <p>dirty:{{ meta.dirty }}</p>
  <p>initialValue:{{ meta.initialValue }}</p>
  <pre>


<strong>handleBlurでメタデータを更新</strong>
イベントとhandleChangeを利用することでバリデーションを実行するタイミングを変更することができました。
イベントに関連する関数handleChangeの他にhandleBlurがあります。
handleBlurはバリデーションではメタデータの一つの値であるtouchedの値を更新するために利用することができます。

<strong>useField関数から戻されるオブジェクトにhandleBlurは含まれています。</strong>
・@inputイベントに設定することで文字を入力するとすぐにイベントが発火されhandleBlurにより
meta.touchedの値がfalseからtrueに変わります。
・@inputイベントから@blurイベントに変更することでフォーカスが外れた時にmeta.touchedの値を更新するといったことが可能になります。

</pre>

<table>
  <tr>
    <td>
<pre>

&lt;input type="text" v-model="name" /&gt;
&lt;p&gt;｛｛ name ｝｝&lt;/p&gt; &lt;p&gt;｛｛  errors.name ｝｝&lt;/p&gt;
&lt;input type="text" v-model="email" /&gt;
&lt;p&gt;｛｛ email ｝｝&lt;/p&gt; &lt;p&gt;｛｛ errors.email ｝｝&lt;/p&gt;
&lt;p&gt;valid:｛｛  meta.valid ｝｝&lt;/p&gt;
&lt;p&gt;dirty:｛｛  meta.dirty ｝｝&lt;/p&gt;
&lt;p&gt;initialValue:｛｛  meta.initialValue ｝｝&lt;/p&gt;


&lt;script&gt;
import { useField, useForm  } from 'vee-validate';
import * as yup from 'yup';
export default {
  setup() {
    const schema = yup.object({
      name: yup.string().required('名前は、必須の項目です。'),
      email: yup.string().required('必須の項目です。').
              email('メールアドレスの形式ではありません。'),
    });

    const { errors } = useForm({
      validationSchema: schema,
    });

    const { value: name } = useField('name');
    const { value: email, meta } = useField('email');

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
&lt;input type="text" v-model="name" /&gt;
&lt;p&gt;｛｛ name ｝｝&lt;/p&gt; &lt;p&gt;｛｛  errors.name ｝｝&lt;/p&gt;
&lt;input type="text" v-model="email"  @input="handleBlur"/&gt;
&lt;!--&lt;input type="text" v-model="email"  @blur="handleBlur"/&gt; --&gt;
&lt;p&gt;｛｛ email ｝｝&lt;/p&gt; &lt;p&gt;｛｛ errors.email ｝｝&lt;/p&gt;
&lt;p&gt;valid:｛｛  meta.valid ｝｝&lt;/p&gt;
&lt;p&gt;dirty:｛｛  meta.dirty ｝｝&lt;/p&gt;
&lt;p&gt;initialValue:｛｛  meta.initialValue ｝｝&lt;/p&gt;


&lt;script&gt;
import { useField, useForm  } from 'vee-validate';
import * as yup from 'yup';
export default {
  setup() {
    const schema = yup.object({
      name: yup.string().required('名前は、必須の項目です。'),
      email: yup.string().required('必須の項目です。').
              email('メールアドレスの形式ではありません。'),
    });

    const { errors } = useForm({
      validationSchema: schema,
    });

    const { value: name } = useField('name');
    const { value: email, meta } = useField('email');

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
    </tr>

</table>

</template>

<script>
import { useField, useForm } from 'vee-validate';
import { object, string } from 'yup';
export default {
  setup() {
    const schema = object({
      name: string().required(),
      email: string()
        .required()
        .email(),
    });

    const { errors } = useForm({
      validationSchema: schema,
    });

    const { value: name } = useField('name');
    const { value: email, meta } = useField('email');

    return {
      name,
      email,
      errors,
      meta,
    };
  },
};</script>