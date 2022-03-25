<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
  name:<input type="text" v-model="name" />
  <p>{{ name }}</p><p>{{ errors.name }}</p>
  email:<input type="text" v-model="email" @change="handleChange" />
  <p>{{ email }}</p><p>{{ errors.email }}</p>

  <pre>


<strong>useFieldで初期値の設定</strong>
ここまではinput要素に初期値は設定されていませんでしたが、
useField関数を使ってinput要素に初期値を設定することができます。
初期値を設定する場合はuseFieldの第3引数を利用します。
第2引数はバリデーションの関数を設定するために利用することができますが
useForm関数を利用した場合はスキーマでバリデーションを設定しているので設定する必要がないためundefinedとします。
<strong>下記のようにinitaialValueを使って初期値を設定</strong>
</pre>

<table>
  <tr>
    <td>
<pre>

&lt;input type="text" v-model="name" /&gt;
&lt;p&gt;｛｛ name ｝｝&lt;/p&gt; &lt;p&gt;｛｛  errors.name ｝｝&lt;/p&gt;
&lt;input type="text" :value="email" /&gt;
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

    const { value: name } = 
            useField('name');
    const { value: email } = 
            useField('email');

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

    const { value: name } = 
            useField('name'<strong>,undefined,{ initialValue: '田中角栄'}</strong>);
    const { value: email } = 
            useField('email');

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

    const { value: name } = useField('name',undefined,{ initialValue: '田中角栄' });
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