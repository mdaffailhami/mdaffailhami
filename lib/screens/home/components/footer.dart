import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mdaffailhami/screens/home/home_screen.dart';
import 'package:url_launcher/url_launcher.dart';

class MyFooter extends StatelessWidget {
  const MyFooter({Key? key}) : super(key: key);

  Future<void> copyEmail(BuildContext context, String email) async {
    try {
      await Clipboard.setData(ClipboardData(text: email));

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: const Text(
            'The email address is copied to your clipboard.',
            style: TextStyle(
              color: Colors.white,
            ),
          ),
          backgroundColor: Colors.green,
          action: SnackBarAction(
            label: 'Dismiss',
            textColor: Theme.of(context).colorScheme.secondary,
            onPressed: () {
              MyHomeScreen.scaffoldKey.currentState?.hideCurrentSnackBar();
            },
          ),
        ),
      );
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            'Failed to copy email address!',
            style: TextStyle(color: Theme.of(context).colorScheme.onError),
          ),
          backgroundColor: Theme.of(context).colorScheme.error,
          action: SnackBarAction(
            label: 'Dismiss',
            textColor: Theme.of(context).colorScheme.secondary,
            onPressed: () {
              MyHomeScreen.scaffoldKey.currentState?.hideCurrentSnackBar();
              // ScaffoldMessenger.of(context).hideCurrentSnackBar();
            },
          ),
        ),
      );
    }
  }

  Future<void> myLaunchUrl(BuildContext context, String url) async {
    if (await canLaunchUrl(Uri.parse(url))) {
      launchUrl(Uri.parse(url));
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            'Failed to launch URL!',
            style: TextStyle(color: Theme.of(context).colorScheme.onError),
          ),
          backgroundColor: Theme.of(context).colorScheme.error,
          action: SnackBarAction(
            label: 'Dismiss',
            textColor: Theme.of(context).colorScheme.secondary,
            onPressed: () {
              MyHomeScreen.scaffoldKey.currentState?.hideCurrentSnackBar();
              // ScaffoldMessenger.of(context).hideCurrentSnackBar();
            },
          ),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      // height: 200,
      child: ColoredBox(
        color: Theme.of(context).colorScheme.surface,
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 20),
          child: Column(
            children: [
              RichText(
                text: TextSpan(
                  style: Theme.of(context).textTheme.bodySmall?.copyWith(
                        fontSize: 16,
                        height: 1.5,
                      ),
                  children: [
                    const TextSpan(text: "Get in touch with me on:\n"),
                    TextSpan(
                      text: "GitHub",
                      style: Theme.of(context).textTheme.bodySmall?.copyWith(
                            fontSize: 16,
                            height: 1.5,
                            color: Theme.of(context).colorScheme.secondary,
                          ),
                      recognizer: TapGestureRecognizer()
                        ..onTap = () => myLaunchUrl(
                              context,
                              'https://github.com/mdaffailhami',
                            ),
                    ),
                    const TextSpan(text: " | "),
                    TextSpan(
                      text: "LinkedIn",
                      style: Theme.of(context).textTheme.bodySmall?.copyWith(
                            fontSize: 16,
                            height: 1.5,
                            color: Theme.of(context).colorScheme.secondary,
                          ),
                      recognizer: TapGestureRecognizer()
                        ..onTap = () => myLaunchUrl(
                              context,
                              'https://linkedin.com/in/mdaffailhami',
                            ),
                    ),
                    const TextSpan(text: " | "),
                    TextSpan(
                      text: "Kaggle",
                      style: Theme.of(context).textTheme.bodySmall?.copyWith(
                            fontSize: 16,
                            height: 1.5,
                            color: Theme.of(context).colorScheme.secondary,
                          ),
                      recognizer: TapGestureRecognizer()
                        ..onTap = () => myLaunchUrl(
                              context,
                              'https://kaggle.com/mdaffailhami',
                            ),
                    ),
                    const TextSpan(text: " | "),
                    TextSpan(
                      text: "Instagram",
                      style: Theme.of(context).textTheme.bodySmall?.copyWith(
                            fontSize: 16,
                            height: 1.5,
                            color: Theme.of(context).colorScheme.secondary,
                          ),
                      recognizer: TapGestureRecognizer()
                        ..onTap = () => myLaunchUrl(
                              context,
                              'https://instagram.com/m.daffailhami',
                            ),
                    ),
                    const TextSpan(text: "\n| "),
                    TextSpan(
                      text: "mdaffailhami@gmail.com",
                      style: Theme.of(context).textTheme.bodySmall?.copyWith(
                            fontSize: 16,
                            height: 2,
                            color: Theme.of(context).colorScheme.secondary,
                          ),
                      recognizer: TapGestureRecognizer()
                        ..onTap =
                            () => copyEmail(context, 'mdaffailhami@gmail.com'),
                    ),
                    const TextSpan(text: " |"),
                  ],
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 10),
              SelectableText(
                '© 2021–2025 Daffa Ilhami.\nAll rights reserved.',
                textAlign: TextAlign.center,
                style: Theme.of(context)
                    .textTheme
                    .bodySmall
                    ?.copyWith(fontSize: 16),
              ),
              Padding(
                padding: EdgeInsets.symmetric(
                  horizontal: MediaQuery.of(context).size.width * 0.03,
                ),
                child: const Divider(),
              ),
              SelectableText(
                '| Last updated on January 12, 2025 |',
                textAlign: TextAlign.center,
                style: Theme.of(context)
                    .textTheme
                    .bodySmall
                    ?.copyWith(fontSize: 15),
              ),
              const SizedBox(height: 2.5),
              SelectableText(
                '| Was released on February 8, 2021 |',
                textAlign: TextAlign.center,
                style: Theme.of(context)
                    .textTheme
                    .bodySmall
                    ?.copyWith(fontSize: 15),
              ),
              const SizedBox(height: 5),
              SelectableText(
                '~Built by Daffa Ilhami~',
                textAlign: TextAlign.center,
                style: Theme.of(context)
                    .textTheme
                    .bodySmall
                    ?.copyWith(fontSize: 15),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
