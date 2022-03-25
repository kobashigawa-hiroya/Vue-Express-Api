<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
  name:<input type="text" v-model="name" />
  <p>{{ name }}</p><p>{{ errors.name }}</p>
  email:<input type="text" v-model="email" />
  <p>{{ email }}</p><p>{{ errors.email }}</p>

  <pre>


<strong>エラーメッセージの設定</strong>
表示されるエラーメッセージを変更したい場合は
required, emailの引数に表示させたいメッセージを入力することで入力した文字列が表示されます。
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
      name: yup.string().required().label('名前'),
      email: yup.string().required().email().label('メールアドレス'),
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
            <strong>required('名前は、必須の項目です。').</strong> 
      email: yup.string().<strong>required('必須の項目です。').
            email('メールアドレスの形式ではありません。'),</strong> 
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
    const { value: email } = useField('email');

    return {
      name,
      email,
      errors,
    };
  },
};
</script>