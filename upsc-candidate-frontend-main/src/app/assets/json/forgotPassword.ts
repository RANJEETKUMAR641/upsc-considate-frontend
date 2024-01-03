export const forgotPasswordData = [
  {
    formid: 'forgotpassword',
    title: 'Forgot Password',
    type: 'M',
    module: 'candidate',
    pkeys: null,
    pkeyid: null,
    model: null,
    extra_props: null,
    readonly: null,
    colsize: 'col-12',
    classes: null,
    hint: null,
    sortno: null,
    active: 1,
    formview: 'form',
    formfilter: null,
    description: null,
    formgroup: null,
    icon: null,
    sections: [
      {
        columns: [
          {
            formid: 'forgotpassword',
            sectionid: null,
            field: 'login_type',
            title: 'Select Mode',
            colsize: 'col-12',
            type: 'select',
            component: 'reactselect',
            required: 1,
            sortno: 1,
            active: 1,
            formview: 1,
            listview: null,
            options: {
              data: [
                {
                  label: 'Registration ID',
                  value: 'registrationid',
                },
                {
                  label: 'Email',
                  value: 'email',
                },
                {
                  label: 'Mobile',
                  value: 'mobile',
                },
              ],
            },
            defaultvalue: null,
            addattrs: null,
            readonly: null,
            hidden: null,
            classes: null,
            inline: 0,
            placeholder: null,
            hint: null,
            dt_width: null,
            dt_sortable: null,
            dt_callback: null,
            dt_class: null,
            dt_rander: null,
            dt_rowgroup: null,
            dt_filter: null,
            dbfield: null,
            info: null,
            title_lng: null,
            printview: null,
            printview_spl: 0,
          },
          {
            formid: 'forgotpassword',
            sectionid: null,
            field: 'email',
            title: 'Enter Email',
            colsize: 'col-12',
            type: 'string',
            component: 'verify-input',
            required: 1,
            sortno: 2,
            active: 1,
            formview: 1,
            listview: null,
            selectqry: null,
            options: null,
            defaultvalue: null,
            addattrs: {
              hasConfirmPassword: true,
            },
            readonly: null,
            hidden: null,
            classes: 'd-none',
            inline: 0,
            placeholder: null,
            hint: null,
            dt_width: null,
            dt_sortable: null,
            dt_callback: null,
            dt_class: null,
            dt_rander: null,
            dt_rowgroup: null,
            dt_filter: null,
            dbfield: null,
            info: null,
            title_lng: null,
            printview: null,
            printview_spl: 0,
          },
          {
            formid: 'forgotpassword',
            sectionid: null,
            field: 'mobile',
            title: 'Enter Mobile',
            colsize: 'col-12',
            type: 'string',
            component: 'verify-input',
            required: 1,
            sortno: 3,
            active: 1,
            formview: 1,
            listview: null,
            selectqry: null,
            options: null,
            defaultvalue: null,
            addattrs: {
              mask: /^[1-9]\d{0,9}$/,
            },
            readonly: null,
            hidden: null,
            classes: 'd-none',
            inline: 0,
            placeholder: null,
            hint: null,
            dt_width: null,
            dt_sortable: null,
            dt_callback: null,
            dt_class: null,
            dt_rander: null,
            dt_rowgroup: null,
            dt_filter: null,
            dbfield: null,
            info: null,
            title_lng: null,
            printview: null,
            printview_spl: 0,
          },
          {
            formid: 'forgotpassword',
            sectionid: null,
            field: 'password',
            title: 'Password',
            colsize: 'col-12',
            type: 'string',
            component: 'checkpassword',
            required: 1,
            sortno: 4,
            active: 1,
            formview: 1,
            listview: null,
            selectqry: null,
            options: null,
            defaultvalue: null,
            addattrs: {
              minLength: {
                value: 8,
                message: 'Invalid password. it should be minimum 8 characters',
              },
            },
            readonly: null,
            hidden: null,
            classes: 'd-none',
            inline: null,
            placeholder: null,
            hint: null,
            dt_width: null,
            dt_sortable: null,
            dt_callback: null,
            dt_class: null,
            dt_rander: null,
            dt_rowgroup: null,
            dt_filter: null,
            dbfield: null,
            info: null,
            title_lng: 'पासवर्ड ',
            printview: null,
            printview_spl: 0,
          },
          {
            formid: 'forgotpassword',
            sectionid: null,
            field: 'captcha',
            title: 'Captcha',
            colsize: 'col-12',
            type: 'string',
            component: 'captcha',
            required: 1,
            sortno: 5,
            active: 1,
            formview: 1,
            listview: null,
            selectqry: null,
            options: null,
            defaultvalue: null,
            addattrs: {
              maxLength: {
                value: 6,
                message: 'Invalid captcha',
              },
              minLength: {
                value: 1,
                message: 'Invalid captcha',
              },
            },
            readonly: null,
            hidden: null,
            classes: null,
            inline: null,
            placeholder: null,
            hint: null,
            dt_width: null,
            dt_sortable: null,
            dt_callback: null,
            dt_class: null,
            dt_rander: null,
            dt_rowgroup: null,
            dt_filter: null,
            dbfield: null,
            info: null,
            title_lng: 'कॅप्चा ',
            printview: null,
            printview_spl: 0,
          },
        ],
      },
    ],
  },
]