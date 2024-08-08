import 'package:flutter/material.dart';
import 'package:mdaffailhami/screens/home/home_screen.dart';
import 'package:url_launcher/url_launcher.dart';

class MySocmedIconButton extends StatelessWidget {
  const MySocmedIconButton({
    Key? key,
    required this.icon,
    required this.tooltip,
    required this.url,
  }) : super(key: key);

  final Widget icon;
  final String tooltip;
  final String url;

  @override
  Widget build(BuildContext context) {
    return IconButton(
      icon: icon,
      tooltip: tooltip,
      iconSize: 27,
      onPressed: () async {
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
      },
    );
  }
}
