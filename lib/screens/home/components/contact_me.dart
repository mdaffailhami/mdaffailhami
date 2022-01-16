import 'package:flutter/material.dart';

class MyContactMeForm extends StatelessWidget {
  const MyContactMeForm({Key? key}) : super(key: key);

  static final GlobalKey componentKey = GlobalKey();

  @override
  Key? get key => componentKey;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.fromLTRB(
        MediaQuery.of(context).size.width * 0.06,
        30,
        MediaQuery.of(context).size.width * 0.06,
        100,
      ),
      child: Column(
        children: [
          Text(
            'Contact Me',
            style: Theme.of(context).textTheme.headline4,
          ),
          Divider(),
          Container(
            constraints: BoxConstraints(maxWidth: 500),
            decoration: BoxDecoration(
              color: Colors.black54,
              borderRadius: BorderRadius.all(Radius.circular(10)),
            ),
            child: Padding(
              padding: const EdgeInsets.all(20),
              child: Wrap(
                runSpacing: 10,
                children: [
                  TextFormField(
                    keyboardType: TextInputType.name,
                    decoration: InputDecoration(
                      prefixIcon: Icon(Icons.person),
                      labelText: 'Name',
                    ),
                  ),
                  TextFormField(
                    keyboardType: TextInputType.emailAddress,
                    decoration: InputDecoration(
                      prefixIcon: Icon(Icons.email),
                      labelText: 'Email address',
                    ),
                  ),
                  TextFormField(
                    maxLines: null,
                    keyboardType: TextInputType.multiline,
                    decoration: InputDecoration(
                      prefixIcon: Icon(Icons.message),
                      labelText: 'Message',
                    ),
                  ),
                  SizedBox(
                    width: double.infinity,
                    height: 32,
                    child: ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        primary: Theme.of(context).colorScheme.primary,
                      ),
                      onPressed: () {},
                      child: Text('SEND'),
                    ),
                  )
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}
