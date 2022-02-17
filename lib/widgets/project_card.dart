import 'package:flutter/material.dart';
import 'package:mdaffailhami/screens/home/home_screen.dart';
import 'package:url_launcher/url_launcher.dart';

class MyProjectCard extends StatelessWidget {
  const MyProjectCard({
    Key? key,
    required this.image,
    required this.title,
    required this.caption,
    required this.url,
  }) : super(key: key);

  final ImageProvider<Object> image;
  final String title;
  final String caption;
  final String url;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 280,
      height: 300,
      child: Card(
        elevation: 3,
        shadowColor: Colors.white,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(12),
        ),
        clipBehavior: Clip.antiAlias,
        color: Theme.of(context).colorScheme.surface,
        child: InkWell(
          onTap: () async {
            if (await canLaunch(url)) {
              launch(url);
            } else {
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(
                  content: Text(
                    'Failed to launch URL!',
                    style:
                        TextStyle(color: Theme.of(context).colorScheme.onError),
                  ),
                  backgroundColor: Theme.of(context).colorScheme.error,
                  action: SnackBarAction(
                    label: 'Dismiss',
                    textColor: Theme.of(context).colorScheme.secondary,
                    onPressed: () {
                      MyHomeScreen.scaffoldKey.currentState
                          ?.hideCurrentSnackBar();
                      // ScaffoldMessenger.of(context).hideCurrentSnackBar();
                    },
                  ),
                ),
              );
            }
          },
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Expanded(
                flex: 13,
                child: ColoredBox(
                  color: Theme.of(context).colorScheme.background,
                  child: Image(
                    image: image,
                    width: double.infinity,
                    fit: BoxFit.contain,
                  ),
                ),
              ),
              Expanded(
                flex: 7,
                child: Padding(
                  padding: const EdgeInsets.all(10),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        title,
                        style: Theme.of(context).textTheme.headline5,
                      ),
                      const SizedBox(height: 4),
                      Flexible(
                        child: Text(
                          caption,
                          overflow: TextOverflow.ellipsis,
                          maxLines: 3,
                          style: Theme.of(context).textTheme.caption,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
