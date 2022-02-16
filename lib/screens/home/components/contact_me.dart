import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class MyContactMeForm extends StatefulWidget {
  const MyContactMeForm({Key? key}) : super(key: key);

  static final GlobalKey componentKey = GlobalKey();

  @override
  Key? get key => MyContactMeForm.componentKey;

  @override
  State<MyContactMeForm> createState() => _MyContactMeFormState();
}

class _MyContactMeFormState extends State<MyContactMeForm> {
  String _name = '';
  String _email = '';
  String _message = '';

  bool _isSending = false;

  ScaffoldFeatureController<SnackBar, SnackBarClosedReason>
      sendMessageSuccessSnackBar() {
    return ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        duration: const Duration(seconds: 10),
        content: const Text(
          'Message sent!',
          style: TextStyle(
            color: Colors.white,
          ),
        ),
        backgroundColor: Colors.green,
        action: SnackBarAction(
          label: 'Dismiss',
          textColor: Theme.of(context).colorScheme.secondary,
          onPressed: () {
            ScaffoldMessenger.of(context).hideCurrentSnackBar();
          },
        ),
      ),
    );
  }

  ScaffoldFeatureController<SnackBar, SnackBarClosedReason>
      sendMessageFailedSnackBar() {
    return ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        duration: const Duration(seconds: 10),
        content: Text(
          'Failed to send message!',
          style: TextStyle(
            color: Theme.of(context).colorScheme.onError,
          ),
        ),
        backgroundColor: Theme.of(context).colorScheme.error,
        action: SnackBarAction(
          label: 'Dismiss',
          textColor: Theme.of(context).colorScheme.secondary,
          onPressed: () {
            ScaffoldMessenger.of(context).hideCurrentSnackBar();
          },
        ),
      ),
    );
  }

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
          const Divider(),
          Container(
            constraints: const BoxConstraints(maxWidth: 500),
            decoration: const BoxDecoration(
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
                    decoration: const InputDecoration(
                      prefixIcon: Icon(Icons.person),
                      labelText: 'Name',
                    ),
                    onChanged: (String value) {
                      _name = value;
                    },
                  ),
                  TextFormField(
                    keyboardType: TextInputType.emailAddress,
                    decoration: const InputDecoration(
                      prefixIcon: Icon(Icons.email),
                      labelText: 'Email address',
                    ),
                    onChanged: (String value) {
                      _email = value;
                    },
                  ),
                  TextFormField(
                    maxLines: null,
                    keyboardType: TextInputType.multiline,
                    decoration: const InputDecoration(
                      prefixIcon: Icon(Icons.message),
                      labelText: 'Message',
                    ),
                    onChanged: (String value) {
                      _message = value;
                    },
                  ),
                  Visibility(
                    visible: _isSending,
                    child: LinearProgressIndicator(
                      color: Theme.of(context).colorScheme.secondary,
                    ),
                  ),
                  SizedBox(
                    width: double.infinity,
                    height: 32,
                    child: ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        primary: Theme.of(context).colorScheme.primary,
                      ),
                      onPressed: () async {
                        final Uri url = Uri.parse(
                          'https://mdaffailhami.herokuapp.com/api/contact-me',
                        );

                        final Map data = {
                          'name': _name,
                          'email': _email,
                          'message': _message,
                        };

                        setState(() {
                          _isSending = true;
                        });

                        try {
                          http.Response send = await http.post(url, body: data);
                          Map responseBody = jsonDecode(send.body);

                          setState(() {
                            _isSending = false;
                          });

                          if (responseBody['status']) {
                            sendMessageSuccessSnackBar();
                          } else {
                            sendMessageFailedSnackBar();
                          }
                        } catch (e) {
                          setState(() {
                            _isSending = false;
                          });

                          sendMessageFailedSnackBar();
                        }
                      },
                      child: const Text('SEND'),
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
